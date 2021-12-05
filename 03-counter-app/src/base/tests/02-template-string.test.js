import '@testing-library/jest-dom';
import getGreeting from '../../base/02-template-string';

describe('02-template-string', () => {
    test('getGreeting should return an expected greeting', () => {
        const name = 'Ricardo';
        const expectedOutput = `Hi ${name}`;
        const result = getGreeting(name);
        expect(result).toBe(expectedOutput);
    });

    test('getGreeting should say hi Carlos when no arguments', () => {
        const expectedHoutput = `Hi Carlos`;
        const result = getGreeting();
        expect(result).toBe(expectedHoutput);
    });
});