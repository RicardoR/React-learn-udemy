describe('Demo test', () => {
    test('this test should pass', () => {
        const message1 = 'Hello world!';
        const message2 = message1.toUpperCase();

        expect(message2).toBe('HELLO WORLD!');
    });

});
