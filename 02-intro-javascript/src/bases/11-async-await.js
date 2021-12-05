import { endPoint, apiKey } from '../../../secret/giphy-data';

const getImagePromise = () => Promise.resolve('image with promise');

getImagePromise().then(image => {
    console.log(image);
});

const getImageAsync = async () => {
    try {
        const fetchRequest = await fetch(`${endPoint}?api_key=${apiKey}`);
        const { data } = await fetchRequest.json();
        return data.images.original.url;
    } catch (error) {
        console.error(error);
    }
}


getImageAsync()
    .then(imageUrl => {
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        document.body.appendChild(imageElement);
    })
    .catch(error => console.info(error));