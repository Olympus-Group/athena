import Token from './token/Token';
import TokenType, { tokenTypesList } from './token/TokenType';
import FieldNode from './rules/FieldNode';
import { FieldsType } from './utils/types';
import { getNodeByName } from './utils/nodes';
import { Node } from './rules/Node';

// Logging imports
import * as ERR_MSG from './logger/errors';

export default class Parser {
  tokens: Token[];
  pos: number = 0;
  current: string = '';
  fields: FieldsType = new Map<string, FieldNode>();

  constructor(tokens: Token[]) {
    this.tokens = tokens;
  }

  match(...expected: TokenType[]): Token | null {
    if (this.pos < this.tokens.length) {
      const currentToken = this.tokens[this.pos];

      if (
        expected.find((type) => type.name === currentToken.type.name)
      ) {
        return currentToken;
      }
    }
    return null;
  }

  require(...expected: TokenType[]): Token {
    const token = this.match(...expected);

    if (token) return token;

    throw new Error(
      ERR_MSG.EXPECTED(this.pos, expected[0].name, this.tokens[this.pos].type.name)
    );
  }

  private parseExpression(): Node {
    const field = this.match(tokenTypesList.FIELD);
    if (field) {
      this.pos++;
      this.current = field.text;
      return new FieldNode();
    }

    const option = this.require(tokenTypesList.OPTION);
    this.pos++;

    const { STRING, NUMBER, BOOLEAN } = tokenTypesList;

    const value = this.require(STRING, NUMBER, BOOLEAN);
    this.pos++;

    return getNodeByName(option.text, value.text);
  }

  parse(): FieldsType {
    while (this.pos < this.tokens.length) {
      const node: Node = this.parseExpression();

      if (node instanceof FieldNode) {
        this.fields.set(this.current, node);
      } else {
        const fieldNode = this.fields.get(this.current);

        if (!fieldNode) {
          throw new Error(
            ERR_MSG.UNKNOWN_FIELD(node.name)
          );
        }

        fieldNode.add(node);
      }
    }

    return this.fields;
  }
}
