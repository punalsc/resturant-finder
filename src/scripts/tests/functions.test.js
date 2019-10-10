import { functions } from '../functions';

// Working with async data
test('Users fetched should be John Davis and his items', async () => {
	const data = await functions.fetchFunc();
	expect(data[0].name).toBe('John Davis');
	expect(data[0].wont_eat[0]).toEqual('Fish');
	expect(data[0].drinks).toEqual(
		expect.arrayContaining(['Cider', 'Rum', 'Soft drinks'])
	);
});
