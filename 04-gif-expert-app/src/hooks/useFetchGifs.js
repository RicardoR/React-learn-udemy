import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
	const [state, setState] = useState({
		data: [],
		loading: true,
	});

	// useEffect only triggers when categroy changes
	useEffect(() => {
		getGifs(category).then((imgs) => {
			setTimeout(() => {
				setState({
					data: imgs,
					loading: false,
				});
			}, 1000);
		});
  }, [category]);

  return state;
};