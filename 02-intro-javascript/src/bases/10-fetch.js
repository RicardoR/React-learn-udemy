import { giphyRandomEndpoint, apiKey } from '../data/giphy-data';

const fetchRequest = fetch(`${giphyRandomEndpoint}?api_key=${apiKey}`);

fetchRequest
    .then(response => response.json())
    .then(({ data }) => {
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.appendChild(img);
    })
    .catch(error => console.warn('error', error));
