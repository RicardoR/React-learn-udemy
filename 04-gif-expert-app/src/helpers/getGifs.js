import { apiKey, giphySearchEndPoint } from '../secret/giphy-data';

export const getGifs = async (category) => {
  const url = `${giphySearchEndPoint}?api_key=${apiKey}&q=${encodeURI(category)}&limit=10`;
  const response = await fetch(url);
  const { data } = await response.json();

  return data.map(({ id, title, images }) => {
    return {
      id: id,
      title: title,
      url: images?.downsized_medium.url,
    };
  });
};
