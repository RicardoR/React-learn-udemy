import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';

import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages)
    };

    useEffect(() => {
        getImages();
    }, []);

    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>
                {
                    images.map((image) => {
                        return <GifGridItem
                            key={ image.id }
                            { ...image }
                        />;
                    })
                }
            </div>
        </>
    );
};


GifGrid.propTypes = {
    category: PropTypes.string.isRequired
};
