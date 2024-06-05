import { RuleNode } from './RuleNode';

import * as NODE_ERR from '../logger/nodes/IsUUIDErrors';
import { colorify, LOG_CLR } from '../logger/colors';

export default class IsUUIDNode implements RuleNode {
  name: string = 'Is UUID';
  expected: boolean;

  constructor(isUUID: boolean) {
    this.expected = isUUID;
  }

  run(value: unknown): void {
    const UUIDRegex = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i;
    const isUUID = typeof value === 'string' && UUIDRegex.test(value);
    const result = this.expected ? isUUID : !isUUID;

    if (!result) {
      throw new Error(
        colorify(
          NODE_ERR.MUST_BE_UUID(value, this.expected),
          LOG_CLR.ERROR
        )
      );
    }
  }
}
