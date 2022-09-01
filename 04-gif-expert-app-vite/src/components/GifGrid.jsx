import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
import { getGifs } from '../helpers/getGifs';

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
            <ol>
                {
                    images.map(({id, title}) => {
                       return <li key={id}>{title}</li>
                    })
                }
            </ol>
        </>
    );
};


GifGrid.propTypes = {
    category: PropTypes.string.isRequired
};
