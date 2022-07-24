import {getImagen} from "../../src/base-pruebas/11-async-await";

describe('11-async-await UT', () => {
    test('getImagen should return an url image from internet', async() => {
        const imageUrl = await getImagen();
        expect(typeof imageUrl).toBe('string');
    });
});
