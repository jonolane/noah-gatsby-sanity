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

data.allSanityRelease.nodes.forEach((node) => {
  const spotifyLink = node.spotifyLink;
  console.log(spotifyLink);
});

  useEffect(() => {
    authenticate().then((api) => {

      const albumLinks = data.allSanityRelease.nodes.map((node) => node.spotifyLink);

      Promise.all(
        albumLinks.map((link) => {
          const id = link.match(/album\/(\w+)/)[1];
          return api.getAlbum(id);
        })
      ).then((albums) => {
        setAlbums(albums);
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
              imageSrc={album.images[0].url}
              title={album.name}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}