import React, { useEffect, useState } from 'react';
import { apiKey, giphySearchEndPoint } from '../secret/giphy-data';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [imageList, setImages] = useState([]);

    useEffect(() => {
      getGifs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const getGifs = async () => {
      const url = `${giphySearchEndPoint}?api_key=${apiKey}&q=${category}&limit=10`;
      const response = await fetch(url);
      const { data } = await response.json();
      
      const gifs = data.map(({ id, title, images }) => {
        return {
          id: id,
          title: title,
          url: images?.downsized_medium.url,
          };
        });
        setImages(gifs);
    };


  return (
    <>
      <h3>{category}</h3>
        {
        imageList.map((img) =>
          <GifGridItem
            {...img}
            key={img.id}
          />
        )
        }
    </>
  );
}
