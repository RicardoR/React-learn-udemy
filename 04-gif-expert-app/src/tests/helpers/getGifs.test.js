import { getGifs } from '../../helpers/getGifs';

describe('getGifs tests', () => {
    test('should return 10 gifs', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);
    });

    test('should return an empty array if category is an emtpy string', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
});