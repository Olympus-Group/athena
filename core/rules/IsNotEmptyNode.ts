import { RuleNode } from './RuleNode';

import * as NODE_ERR from '../logger/nodes/IsNotEmptyErrors';
import { colorify, LOG_CLR } from '../logger/colors';

export default class IsNotEmptyNode implements RuleNode {
  name: string = 'Is not empty';
  expected: boolean;

  constructor(isNotEmpty: boolean) {
    this.expected = isNotEmpty;
  }

  run(value: unknown): void {
    const isNotEmpty = value + '' !== '';
    const result = this.expected ? isNotEmpty : !isNotEmpty;

    if (!result) {
      throw new Error(
        colorify(
          NODE_ERR.MUST_NOT_BE_EMPTY(value, this.expected),
          LOG_CLR.ERROR
        )
      );
    }
  }
}
