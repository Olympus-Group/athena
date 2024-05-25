import { Node } from './Node';

import * as NODE_ERR from '../logger/nodes/IsNumberErrors';
import { colorify, LOG_CLR } from '../logger/colors';

export default class IsNumberNode implements Node {
  name: string = 'Is number';
  expected: boolean;

  constructor(isNumber: boolean) {
    this.expected = isNumber;
  }

  run(value: unknown): void {
    const isNumber = !isNaN(value as number) && !isNaN(parseFloat(value as string));
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
