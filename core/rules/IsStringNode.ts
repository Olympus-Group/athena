import { Node } from './Node';

import * as NODE_ERR from '../logger/nodes/IsStringErrors';
import { colorify, LOG_CLR } from '../logger/colors';

export default class IsStringNode implements Node {
  name: string = 'Is string';
  expected: boolean;

  constructor(isString: boolean) {
    this.expected = isString;
  }

  run(value: unknown): void {
    const isString = typeof value === 'string';
    const result = this.expected ? isString : !isString;

    if (!result) {
      throw new Error(
        colorify(
          NODE_ERR.MUST_BE_STRING(value, this.expected),
          LOG_CLR.ERROR
        )
      );
    }
  }
}
