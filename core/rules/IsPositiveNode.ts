import { RuleNode } from './RuleNode';

import * as NODE_ERR from '../logger/nodes/IsPositiveErrors';
import { colorify, LOG_CLR } from '../logger/colors';

export default class IsPositiveNode implements RuleNode {
  name: string = 'Is positive';
  expected: boolean;

  constructor(isPositive: boolean) {
    this.expected = isPositive;
  }

  run(value: unknown): void {
    const isPositive = typeof value === 'number' && !isNaN(value) && isFinite(value) && Number(value) > 0;
    const result = this.expected ? isPositive : !isPositive;

    if (!result) {
      throw new Error(
        colorify(
          NODE_ERR.MUST_BE_POSITIVE(value, this.expected),
          LOG_CLR.ERROR
        )
      );
    }
  }
}
