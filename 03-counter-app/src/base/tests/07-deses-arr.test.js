import { returnArray } from '../07-deses-arr';

describe('07-deses-array', () => {
    test('returnArray should return a string and a number', () => {
        const [letters, numbers] = returnArray();
        const result = returnArray();

        expect(result.length).toBe(2);
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);
    });
});
