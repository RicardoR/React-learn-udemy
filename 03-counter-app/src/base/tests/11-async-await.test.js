import { getImage } from '../11-async-await';

describe('11-async-await', () => {
    test('getImage should return images', async() => {
        const imageUrl = await getImage();
        expect( imageUrl.includes('https://')).toBe(true);
    });
});