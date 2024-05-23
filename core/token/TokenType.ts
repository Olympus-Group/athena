export default class TokenType {
  name: string;
  regex: string;

  constructor(name: string, regex: string) {
    this.name = name;
    this.regex = regex;
  }
}

export const tokenTypesList = {
  'FIELD': new TokenType('FIELD', '^[^:\\s]+:\\n'),
  'OPTION': new TokenType('OPTION', '^  [^:\\s]+:'),
  'STRING': new TokenType('STRING', '\\s+".*"(\\n|$)'),
  'NUMBER': new TokenType('NUMBER', '\\s+[0-9]+[\\.,]{0,1}[0-9]*(\\n|$)'),
  'BOOLEAN': new TokenType('BOOLEAN', '\\s+(true|false)(\\n|$)')
};
