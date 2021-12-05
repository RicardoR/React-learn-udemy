describe('Tests in demo:', () => {
    test('Strings should be equal', () => {
    const message = 'Hello World';
    const message2 = `Hello World`;

    expect(message).toBe(message2);
    });
})
