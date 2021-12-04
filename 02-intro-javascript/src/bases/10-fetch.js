const apiKey = 'nGMspUXmAOA6zW7UkZQNkl5YLSOUUMLX';
const endPoint = 'api.giphy.com/v1/gifs/random';

const fetchRequest = fetch(`https://${endPoint}?api_key=${apiKey}`);

fetchRequest
    .then(response => response.json())
    .then(({ data }) => {
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.appendChild(img);
    })
    .catch(error => console.warn('error', error));
