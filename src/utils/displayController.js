import { authenticate } from './spotifyAuth';
import { useStaticQuery, graphql } from 'gatsby';
import { useState, useEffect } from 'react';

export const getAlbums = async (data) => {
  const api = await authenticate();

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

  const results = await Promise.all([...albumPromises, ...trackPromises]);

  const combinedResults = data.allSanityRelease.nodes
    .filter((node) => node.displayOrNo !== false)
    .map((node) => {
      const spotifyLink = node.spotifyLink;
      const isSingleTrack = node.singleTrack;
      const year = node.year;
      const displayOrNo = node.displayOrNo !== false;

      if (!isSingleTrack) {
        const id = spotifyLink.match(/album\/(\w+)/)[1];
        const result = results.find((r) => r.id === id);
        return {
          id: result.id,
          type: 'album',
          name: result.name,
          images: result.images,
          year: year,
          displayOrNo: displayOrNo,
        };
      } else {
        const id = spotifyLink.match(/track\/(\w+)/)[1];
        const result = results.find((r) => r.id === id);
        return {
          id: result.id,
          type: 'track',
          name: result.name,
          album: result.album,
          year: year,
          displayOrNo: displayOrNo,
        };
      }
    });

  const sortedResults = combinedResults.sort((a, b) => b.year - a.year);
  const filteredAlbums = sortedResults.filter((album) => album.displayOrNo !== false);

  return filteredAlbums;
};

export const useAlbums = () => {
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

  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getAlbums(data).then((albums) => {
      setAlbums(albums);
    }).catch((error) => console.error(error));
  }, [data]);

  return albums;
};