import { RuleNode } from './RuleNode';

import * as NODE_ERR from '../logger/nodes/IsNumberErrors';
import { colorify, LOG_CLR } from '../logger/colors';

export default class IsNumberNode implements RuleNode {
  name: string = 'Is number';
  expected: boolean;

  constructor(isNumber: boolean) {
    this.expected = isNumber;
  }

  run(value: unknown): void {
    const isNumber = typeof value === 'number' && !isNaN(value) && isFinite(value);
    const result = this.expected ? isNumber : !isNumber;

    if (!result) {
      throw new Error(
        colorify(
          NODE_ERR.MUST_BE_NUMBER(value, this.expected),
          LOG_CLR.ERROR
        )
      );
    }
  }
}
