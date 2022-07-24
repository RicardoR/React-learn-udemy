import { apiKey } from "../../secret/giphy-data";

export const getImagen = async(apiKeyParam = apiKey) => {
    try {
        const resp  = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKeyParam }`);
        const { data } = await resp.json();
        const { url } = data.images.original;

        return url;

    } catch (error) {
        return 'Image not found';
    }
};



