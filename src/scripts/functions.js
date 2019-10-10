import axios from 'axios';

export const functions = {
	fetchFunc: () =>
		axios
			.get(
				`https://gist.githubusercontent.com/punalsc/fa2b398c3915e3cba7808723100fba63/raw/ad01e5185b2a1af9224a521f6c1c4f936ea01adb/users.json`
			)
			.then(res => res.data)
			.catch(err => console.log(err))
};
