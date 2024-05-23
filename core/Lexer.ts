import Token from './token/Token';
import { tokenTypesList } from './token/TokenType';

function trimLine(line: string) {
  return line.replace(/^[\s\n]+|[\s\n:]+$/g, '');
}

export default class Lexer {
  code: string;
  pos: number = 0;
  tokenList: Token[] = [];

  constructor(code: string) {
    this.code = code;
  }

  private getCurrentLine(): number {
    let length = 0;

    const lines = this.code.split('\n');
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      length += line.length;

      if (length > this.pos) {
        return i;
      }
    }
    return 0;
  }

  private trace(up: number): void {
    const lines = this.code.split('\n');
    for (let i = 0; i <= up; i++) {
      const line = i !== up ? lines[i] : `\x1b[31m${lines[i]}\x1b[0m`;

      console.log(`${i + 1} > ${line}`);
    }
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
        const result: string = trimLine(matched[0]);
        const token: Token = new Token(tokenType, result, this.pos);

        this.tokenList.push(token);

        this.pos += matched[0].length;

        return true;
      }
    }

    const lineNumber: number = this.getCurrentLine();
    this.trace(lineNumber);

    throw new Error(`Unknown action on the line ${lineNumber + 1}`);
  }

  analyse(): Token[] {
    while (this.next()) {}
    return this.tokenList;
  }
}
