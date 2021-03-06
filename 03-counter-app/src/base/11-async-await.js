import { apiKey, giphyRandomEndpoint } from '../../../secret/giphy-data';

export const getImage = async () => {

    try {
        const resp = await fetch(`${giphyRandomEndpoint}?api_key=${apiKey}`);
        const { data } = await resp.json(); 
        const { url } = data.images.original;
        return url;

    } catch (error) {
        return 'Image not found';
    }
}