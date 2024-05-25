import Token from './token/Token';
import { tokenTypesList } from './token/TokenType';

// Logging imports
import * as ERR_MSG from './logger/errors';

function trimLine(line: string) {
  return line.replace(/^[\s\n"]+|[\s\n:"]+$/g, '');
}

export default class Lexer {
  code: string;
  pos: number = 0;
  tokenList: Token[] = [];

  constructor(code: string) {
    this.code = code;
  }

  private next(): boolean {
    if (this.pos >= this.code.length) {
      return false;
    }

    for (const tokenType of Object.values(tokenTypesList)) {
      const regex: RegExp = new RegExp(tokenType.regex);
      const line: string = this.code.slice(this.pos);

      const matched = line.match(regex);

      if (matched && matched[0]) {
        if (!line.startsWith(matched[0])) {
          throw new Error(
            ERR_MSG.WRONG_VALUE_ON_POSITION(this.pos)
          );
        }

        const result: string = trimLine(matched[0]);
        const token: Token = new Token(tokenType, result, this.pos);

        this.tokenList.push(token);

        this.pos += matched[0].length;

        return true;
      }
    }

    throw new Error(ERR_MSG.UNKNOWN_ACTION());
  }

  analyse(): Token[] {
    while (this.next()) {}
    return this.tokenList;
  }
}
