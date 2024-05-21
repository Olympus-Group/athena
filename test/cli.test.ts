describe('command line interface reads options correctly', () => {

  process.argv.push('--schema', './path/to/schema.net', '--config', './path/to/config.json');
  const { options } = require('../interfaces/cli');

  test('receives the path to schema', () => {
    expect(options.schema).toBe('./path/to/schema.net');
  });

  test('receives the path to config', () => {
    expect(options.config).toBe('./path/to/config.json');
  });
});

describe('command line interface throws errors where needed', () => {

  test('throws error when schema is not specified', () => {
    const testFunc = () => {
      process.argv.push('--config', './path/to/config.json');
      require('../interfaces/cli');
    };
    expect(testFunc).toThrow;
  });

  test('throws error when config is not specified', () => {
    const testFunc = () => {
      process.argv.push('--schema', './path/to/schema.net');
      require('../interfaces/cli');
    };
    expect(testFunc).toThrow;
  });

  test('throws error when no options are specified', () => {
    const testFunc = () => {
      require('../interfaces/cli');
    };
    expect(testFunc).toThrow;
  });
});
