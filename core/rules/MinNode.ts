import { RuleNode } from './RuleNode';

import * as NODE_ERR from '../logger/nodes/MinErrors';
import { colorify, LOG_CLR } from '../logger/colors';

export default class MinNode implements RuleNode {
  name: string = 'Bigger than';
  expected: number;

  constructor(min: number) {
    this.expected = min;
  }

  run(value: unknown): void {
    const min =
      typeof value === 'number' &&
      !isNaN(value) &&
      isFinite(value) &&
      Number(value) >= this.expected;

    if (!min) {
      throw new Error(
        colorify(
          NODE_ERR.MUST_BE_AT_LEAST(value, this.expected),
          LOG_CLR.ERROR
        )
      );
    }
  }
}
