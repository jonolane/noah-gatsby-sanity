import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { authenticate } from '../utils/spotifyAuth';
import { useStaticQuery, graphql } from 'gatsby';

export default function Home() {
  const [albums, setAlbums] = useState([]);

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
          year
          singleTrack
          displayOrNo
          slug {
            current
          }
        }
      }
    }
  `);

  useEffect(() => {
    authenticate().then((api) => {
      const albumLinks = data.allSanityRelease.nodes
        .filter((node) => !node.singleTrack)
        .map((node) => node.spotifyLink);

      const trackLinks = data.allSanityRelease.nodes
        .filter((node) => node.singleTrack)
        .map((node) => node.spotifyLink);

      const albumPromises = albumLinks.map((link) => {
        const id = link.match(/album\/(\w+)/)[1];
        return api.getAlbum(id);
      });

      const trackPromises = trackLinks.map((link) => {
        const id = link.match(/track\/(\w+)/)[1];
        return api.getTrack(id);
      });

      Promise.all([...albumPromises, ...trackPromises]).then((results) => {
        const combinedResults = data.allSanityRelease.nodes
          .filter((node) => node.displayOrNo !== false)
          .map((node) => {
            const spotifyLink = node.spotifyLink;
            const isSingleTrack = node.singleTrack;
            const year = node.year;
            const displayOrNo = node.displayOrNo !== false;

            if (!isSingleTrack) {
              const id = spotifyLink.match(/album\/(\w+)/)[1];
              return api.getAlbum(id).then((result) => {
                return {
                  id: result.id,
                  type: 'album',
                  name: result.name,
                  images: result.images,
                  year: year,
                  displayOrNo: displayOrNo,
                };
              });
            } else {
              const id = spotifyLink.match(/track\/(\w+)/)[1];
              return api.getTrack(id).then((result) => {
                return {
                  id: result.id,
                  type: 'track',
                  name: result.name,
                  album: result.album,
                  year: year,
                  displayOrNo: displayOrNo,
                };
              });
            }
          });

        Promise.all(combinedResults).then((results) => {
          const sortedResults = results.sort((a, b) => b.year - a.year);
          const filteredAlbums = sortedResults.filter((album) => album.displayOrNo !== false);
          setAlbums(filteredAlbums);
        });
      });
    }).catch((error) => console.error(error));
  }, []);

  return (
    <Layout>
      <section className="flex flex-col items-center justify-center font-poppins tracking-wider">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
          {albums.map((album) => (
            <Card
              key={album.id}
              imageSrc={album.type === 'album' ? album.images[0].url : album.album.images[0].url}
              title={album.name}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}