import axios from 'axios';

export const functions = {
	fetchFunc: url =>
		axios
			.get(url)
			.then(res => res.data)
			.catch(err => err)
};
