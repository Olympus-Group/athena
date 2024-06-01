import Parser from '../core/Parser';
import Token from '../core/token/Token';
import TokenType from '../core/token/TokenType';
import IsNumberNode from '../core/rules/IsNumberNode';
import IsNegativeNode from '../core/rules/IsNegativeNode';
import MinNode from '../core/rules/MinNode';

const tokensSimple = [
  new Token(new TokenType('FIELD', '^[^:\\s]+:\\r?\\n'), 'name', 0),
  new Token(new TokenType('OPTION', '^  [^:\\s]+:'), 'isNumber', 6),
  new Token(new TokenType('BOOLEAN', '\\s+(true|false)(\\r?\\n|$)'), 'true', 17),
  new Token(new TokenType('FIELD', '^[^:\\s]+:\\r?\\n'), 'another', 23),
  new Token(new TokenType('OPTION', '^  [^:\\s]+:'), 'isNegative', 32),
  new Token(new TokenType('BOOLEAN', '\\s+(true|false)(\\r?\\n|$)'), 'true', 45),
  new Token(new TokenType('OPTION', '^  [^:\\s]+:'), 'min', 51),
  new Token(new TokenType(
    'NUMBER', '\\s+-?[0-9]+[\\.,]{0,1}[0-9]*(\\r?\\n|$)'
  ), '-5', 57),
];

const tokensWrong = [
  new Token(new TokenType('OPTION', '^  [^:\\s]+:'), 'isNumber', 6),
  new Token(new TokenType('BOOLEAN', '\\s+(true|false)(\\n|$)'), 'true', 17),
];

describe('Parser parses tokens correctly', () => {

  test('returns proper fields after reading tokens', () => {
    const parser = new Parser(tokensSimple);
    const fields = parser.parse();

    const expectedNumberNodes = [new IsNumberNode(true)];
    const expectedNodes = [
      new IsNegativeNode(true), new MinNode('-5' as unknown as number)
    ];

    expect(fields.get('name')?.name).toBe('Field');
    expect(fields.get('name')?.operations).toStrictEqual(expectedNumberNodes);

    expect(fields.get('another')?.name).toBe('Field');
    expect(fields.get('another')?.operations).toStrictEqual(expectedNodes);
  });

  test('throws an error when the field is not specified, but options are', () => {
    const parser = new Parser(tokensWrong);
    expect(() => parser.parse()).toThrow();
  });
});
