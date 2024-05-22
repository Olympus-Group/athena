describe('command line interface reads options correctly', () => {

  process.argv.push(
    '--schema', './path/to/schema.net',
    '--config', './path/to/config.json'
  );
  const { options } = require('../interfaces/cli');

  test('receives the path to schema', () => {
    expect(options.schema).toBe('./path/to/schema.net');
  });

  test('receives the path to config', () => {
    expect(options.config).toBe('./path/to/config.json');
  });
});

describe('command line interface supports -h --help flag', () => {
  test('receives the path to config', () => {
    const testFunc = () => {
      process.argv.push('--help');
      require('../interfaces/cli');
    };
    expect(testFunc).not.toThrow();
  });
});
