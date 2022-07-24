import {getImagen} from "../../src/base-pruebas/11-async-await";

describe('11-async-await UT', () => {
    test('getImagen should return an url image from internet', async() => {
        const imageUrl = await getImagen();
        expect(typeof imageUrl).toBe('string');
    });

    test('getImagen should return an error when something was wrong', async() => {
        try {
            const fakeApiKey = 'abc';
            await getImagen(fakeApiKey);
        } catch (e) {
            expect(e).toBe('Image not found');
        }
    })
});
