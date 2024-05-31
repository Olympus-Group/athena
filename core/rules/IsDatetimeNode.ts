import { Node } from './Node';

import * as NODE_ERR from '../logger/nodes/IsDatetimeErrors';
import { colorify, LOG_CLR } from '../logger/colors';

export default class IsDatetimeNode implements Node {
  name: string = 'Is datetime';
  expected: boolean;

  constructor(isDatetime: boolean) {
    this.expected = isDatetime;
  }

  run(value: unknown): void {
    const isDatetime = typeof value === 'string' && !isNaN(new Date(value).getTime());
    const result = this.expected ? isDatetime : !isDatetime;

    if (!result) {
      throw new Error(
        colorify(
          NODE_ERR.MUST_BE_DATETIME(value, this.expected),
          LOG_CLR.ERROR
        )
      );
    }
  }
}
