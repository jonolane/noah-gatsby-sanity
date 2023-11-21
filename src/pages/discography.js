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
      console.log('Sorted releases:', sortedReleases);
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
      <div className='font-poppins tracking-wider pt-10 px-10'>
        {sortedReleases.map((release) => (
          <div key={release.spotifyLink} style={{ textAlign: 'center' }}>
            <p className='my-5'>{`${release.artist.name} - ${release.title} - ${release.workDone}`}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Discography;


/* previous boilerplate

import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';

const Discography = ({ data }) => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-start pb-4 px-10 pt-8">

        <div className="md:w-1/2 mr-10 tracking-widest font-poppins">
          <h1 className="text-3xl font-bold mb-4">Hi! I’m Noah</h1>
          <h2 className='mb-4 text-lg'>
            I’m an Asheville-based music person.
          </h2>
          <p className="mb-4">
            I tend to wear a ton of different hats, and I’m completely fine with that. Every day working on music feels a little different and exciting. I am endlessly thankful to others for trusting my hands and ears on their art.
          </p>
          <p className="mb-4">
            My primary instruments for remote overdubs are bass and pedal steel, though I have done remote overdubs with plenty of other instruments and am open to continuing to do that.
          </p>
          <p className="mb-4">
            I love to mix other people’s records. Helping something come over the finish line and reach mastering in an *almost* fully realized vision is one of my great joys. I view mixing as this wild mix of like 70% technical skill / 30% creative vision, and it’s really fun to get there with an artist.
          </p>
          <p className="mb-4">
            Some notable labels I have worked with are Harvest Records, Saddle Creek, Polyvinyl, Grand Jury, Double Double Whammy, Thrill Jockey & Keeled Scales. Records I’ve produced and mixed have been featured and reviewed by Pitchfork, Stereogum, Billboard, GoldFlakePaint, The New York Times, and NPR. Songs I’ve worked on have millions & millions of streams, but that should matter less than clear communication and helping you achieve your musical goals.
          </p>
          <p>
            Always looking for new work. If you’re interested in working together, I want to help you make stuff. It’s your art… so just visit that contact section and let me know how I might be able to do that ✨✨
          </p>
        </div>


        <div className="md:w-1/2 flex items-center justify-center">
          <StaticImage // Use StaticImage instead of Img
            src="../images/noah-kitt.jpg" // Update the path to the image
            alt="Profile"
            width={600}
            quality={95} // You can adjust the image quality
            formats={['auto', 'webp', 'avif']} // Support multiple formats
          />
        </div>

      </div>
    </Layout>
  );
};

export default Discography;*/
