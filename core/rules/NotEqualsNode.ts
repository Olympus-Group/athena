import { Node } from './Node';

import * as NODE_ERR from '../logger/nodes/NotEqualsErrors';
import { colorify, LOG_CLR } from '../logger/colors';

export default class NotEqualsNode implements Node {
  name: string = 'Not equals';
  expected: unknown;

  constructor(notEquals: unknown) {
    this.expected = notEquals;
  }

  run(value: unknown): void {
    const equals = value + '' === this.expected + '';
    
    if (equals) {
      throw new Error(
        colorify(
          NODE_ERR.MUST_NOT_EQUAL(value, this.expected),
          LOG_CLR.ERROR
        )
      );
    }
  }
}
