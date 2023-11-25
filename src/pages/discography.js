import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { useStaticQuery, graphql } from 'gatsby';
import { authenticate } from '../utils/spotifyAuth';

const Discography = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityRelease {
        nodes {
          artist {
            name
          }
          title
          workDone
          spotifyLink
        }
      }
    }
  `);

  const [sortedReleases, setSortedReleases] = useState([]);

  useEffect(() => {
    const fetchReleases = async () => {
      const api = await authenticate();

      const releasePromises = data.allSanityRelease.nodes.map(async (release) => {
        const spotifyId = extractSpotifyId(release.spotifyLink);
        let album;
      
        if (release.spotifyLink.match(/album/)) {
          album = await api.getAlbum(spotifyId);
        } else if (release.spotifyLink.match(/track/)) {
          album = await api.getTrack(spotifyId);
        }
      
        // console.log('Album information:', album);

        let releaseDate;
        if (album.album) {
          releaseDate = album.album.release_date;
        } else {
          releaseDate = album.release_date;
        }

        return {
          ...release,
          releaseDate: releaseDate,
        };
      });

      const releases = await Promise.all(releasePromises);
      // console.log('Releases:', releases);

      const sortedReleases = releases.sort((a, b) => {
        const releaseDateA = new Date(a.releaseDate);
        const releaseDateB = new Date(b.releaseDate);
        return releaseDateB - releaseDateA;
      });

      setSortedReleases(sortedReleases);
      // console.log('Sorted releases:', sortedReleases);
    };

    fetchReleases();
  }, []);

  function extractSpotifyId(spotifyLink) {
    const albumRegex = /album\/(\w+)/;
    const trackRegex = /track\/(\w+)/;

    let match;
    let spotifyId;

    match = spotifyLink.match(albumRegex);
    if (match) {
      spotifyId = match[1];     
      return spotifyId;
    }

    match = spotifyLink.match(trackRegex);
    if (match) {
      spotifyId = match[1];
      return spotifyId;
    }

    throw new Error('Invalid Spotify link');
  }

  return (
    <Layout>
      <div className='font-poppins tracking-wider px-10 py-6'>
        {sortedReleases.map((release, index) => {
          const currentYear = new Date(release.releaseDate).getFullYear();
          const previousRelease = sortedReleases[index - 1];
          const previousYear = previousRelease ? new Date(previousRelease.releaseDate).getFullYear() : null;
  
          if (previousYear !== currentYear) {
            const isFirstYear = index === 0; // Check if it's the first year
  
            return (
              <React.Fragment key={currentYear}>
                <h1 className={`text-left text-2xl lg:text-center ${isFirstYear ? '' : 'mt-11'}`}>{currentYear}</h1>
                <div className='text-left lg:text-center'>
                  <p className='my-5'>{`${release.artist.name} - ${release.title} - ${release.workDone}`}</p>
                </div>

              </React.Fragment>
            );
          }
  
          return (
            <div key={release.spotifyLink} className='text-left lg:text-center'>
              <p className='my-5'>{`${release.artist.name} - ${release.title} - ${release.workDone}`}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Discography;