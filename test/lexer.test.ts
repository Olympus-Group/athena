import Lexer from '../core/Lexer';

const schemaString = `Gemstone:
  notEquals: "Sapphire"
  notEquals: "Am3t-hySt"
`;

const schemaBoolean = `ASI:
  required: true
  isBool: false
`;

const schemaNumber = `Pdoom:
  min: 0
  max: 99.9
`;

describe('Lexer analyses schema correctly', () => {
  test('properly detects FIELD tokens', () => {
    const lexer = new Lexer(schemaString);
    const tokens = lexer.analyse();

    expect(tokens[0].type.name).toBe('FIELD');
    expect(tokens[0].text).toBe('Gemstone');
    expect(tokens[0].pos).toBe(0);
  });

  test('properly detects OPTION tokens', () => {
    const lexer = new Lexer(schemaString);
    const tokens = lexer.analyse();

    expect(tokens[1].type.name).toBe('OPTION');
    expect(tokens[1].text).toBe('notEquals');
    expect(tokens[1].pos).toBe(10);

    expect(tokens[3].type.name).toBe('OPTION');
    expect(tokens[3].text).toBe('notEquals');
    expect(tokens[3].pos).toBe(34);
  });

  test('properly detects STRING tokens', () => {
    const lexer = new Lexer(schemaString);
    const tokens = lexer.analyse();

    expect(tokens[2].type.name).toBe('STRING');
    expect(tokens[2].text).toBe('Sapphire');
    expect(tokens[2].pos).toBe(22);

    expect(tokens[4].type.name).toBe('STRING');
    expect(tokens[4].text).toBe('Am3t-hySt');
    expect(tokens[4].pos).toBe(46);
  });

  test('properly detects BOOLEAN tokens', () => {
    const lexer = new Lexer(schemaBoolean);
    const tokens = lexer.analyse();

    expect(tokens[2].type.name).toBe('BOOLEAN');
    expect(tokens[2].text).toBe('true');
    expect(tokens[2].pos).toBe(16);

    expect(tokens[4].type.name).toBe('BOOLEAN');
    expect(tokens[4].text).toBe('false');
    expect(tokens[4].pos).toBe(31);
  });

  test('properly detects NUMBER tokens', () => {
    const lexer = new Lexer(schemaNumber);
    const tokens = lexer.analyse();

    expect(tokens[2].type.name).toBe('NUMBER');
    expect(tokens[2].text).toBe('0');
    expect(tokens[2].pos).toBe(13);

    expect(tokens[4].type.name).toBe('NUMBER');
    expect(tokens[4].text).toBe('99.9');
    expect(tokens[4].pos).toBe(22);
  });
});
