import { Node } from './Node';

import * as NODE_ERR from '../logger/nodes/EqualsErrors';
import { colorify, LOG_CLR } from '../logger/colors';

export default class EqualsNode implements Node {
  name: string = 'Equals';
  expected: unknown;

  constructor(equals: unknown) {
    this.expected = equals;
  }

  run(value: unknown): void {
    const equals = value + '' === this.expected + '';
    
    if (!equals) {
      throw new Error(
        colorify(
          NODE_ERR.MUST_EQUAL(value, this.expected),
          LOG_CLR.ERROR
        )
      );
    }
  }
}
