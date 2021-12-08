import React, { useEffect, useState } from 'react';
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    const [imageList, setImages] = useState([]);

    useEffect(() => {
      getGifs(category).then(setImages);
    }, [category]);
    

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {
        imageList.map((img) =>
          <GifGridItem
            {...img}
            key={img.id}
          />
        )
        }
      </div>
    </>
  );
}
