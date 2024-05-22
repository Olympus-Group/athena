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
  // Replace this token with value types
  'VALUE': new TokenType('VALUE', '^\\s*[^:]+(\\n|$)')
};
