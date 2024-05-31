import { Node } from './Node';

import * as NODE_ERR from '../logger/nodes/MaxErrors';
import { colorify, LOG_CLR } from '../logger/colors';

export default class MaxNode implements Node {
  name: string = 'Max';
  expected: number;

  constructor(max: number) {
    this.expected = max;
  }

  run(value: unknown): void {
    const max = typeof value === 'number' && !isNaN(value) && isFinite(value) && Number(value) <= this.expected;

    if (!max) {
      throw new Error(
        colorify(
          NODE_ERR.MUST_BE_AT_MOST(value, this.expected),
          LOG_CLR.ERROR
        )
      );
    }
  }
}
