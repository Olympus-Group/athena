import { REG } from '../utils/regexp';

export default class TokenType {
  name: string;
  regex: string;

  constructor(name: string, regex: string) {
    this.name = name;
    this.regex = regex;
  }
}

const { LINE, SPACE } = REG;

export const tokenTypesList = {
  'FIELD': new TokenType('FIELD', `^[^:${SPACE}]+:${LINE}`),
  'OPTION': new TokenType('OPTION', `^  [^:${SPACE}]+:`),
  'STRING': new TokenType('STRING', `${SPACE}+".*"(${LINE}|$)`),
  'NUMBER': new TokenType('NUMBER', `${SPACE}+-?[0-9]+[\\.,]{0,1}[0-9]*(${LINE}|$)`),
  'BOOLEAN': new TokenType('BOOLEAN', `${SPACE}+(true|false)(${LINE}|$)`)
};
