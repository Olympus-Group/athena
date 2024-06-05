import { RuleNode } from './RuleNode';

import * as NODE_ERR from '../logger/nodes/IsNegativeErrors';
import { colorify, LOG_CLR } from '../logger/colors';

export default class IsNegativeNode implements RuleNode {
  name: string = 'Is negative';
  expected: boolean;

  constructor(isNegative: boolean) {
    this.expected = isNegative;
  }

  run(value: unknown): void {
    const isNegative =
      typeof value === 'number' &&
      !isNaN(value) &&
      isFinite(value) &&
      Number(value) < 0;

    const result = this.expected ? isNegative : !isNegative;

    if (!result) {
      throw new Error(
        colorify(
          NODE_ERR.MUST_BE_NEGATIVE(value, this.expected),
          LOG_CLR.ERROR
        )
      );
    }
  }
}
