import { functions } from '../functions';

// Working with async data
test('Users fetched should be John Davis and his items', async () => {
	const data = await functions.fetchFunc(
		'https://gist.githubusercontent.com/punalsc/fa2b398c3915e3cba7808723100fba63/raw/ad01e5185b2a1af9224a521f6c1c4f936ea01adb/users.json'
	);
	expect(data[0].name).toBe('John Davis');
	expect(data[0].wont_eat[0]).toEqual('Fish');
	expect(data[0].drinks).toEqual(
		expect.arrayContaining(['Cider', 'Rum', 'Soft drinks'])
	);
});

test('Test file not found', async () => {
	const data = await functions.fetchFunc(
		'https://gist.githubusercontent.com/punalsc/fa2b398c3915e3cba7808723100fba63/raw/ad01e5185b2a1af9224a521f6c1c4f936ea01adb/users.jso'
	);

	expect(data.response.statusText).toEqual('Not Found');
});

test('Test undefined', async () => {
	const data = await functions.fetchFunc('someurl');
	expect(data.response).toEqual(undefined);
});
