test('ENV variables', () => {
  expect(process.env['NODE_ENV']).toBe('test');
  expect(process.env['PORT']).toBe('8080');
});