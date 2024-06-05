import { RuleNode } from './RuleNode';

import * as NODE_ERR from '../logger/nodes/IsBoolErrors';
import { colorify, LOG_CLR } from '../logger/colors';

export default class IsBoolNode implements RuleNode {
  name: string = 'Is bool';
  expected: boolean;

  constructor(isBool: boolean) {
    this.expected = isBool;
  }

  run(value: unknown): void {
    const isBool = typeof value === 'boolean';
    const result = this.expected ? isBool : !isBool;

    if (!result) {
      throw new Error(
        colorify(
          NODE_ERR.MUST_BE_BOOL(value, this.expected),
          LOG_CLR.ERROR
        )
      );
    }
  }
}
