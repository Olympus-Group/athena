import { Node } from './Node';
import { ValuesType } from '../utils/types';
import { colorify, LOG_CLR } from '../logger/colors';
import { RuleNode } from './RuleNode';

export default class FieldNode implements Node {
  name: string = 'Field';
  log: boolean;
  operations: RuleNode[] = [];

  constructor(log: boolean = false) {
    this.log = log;
  }

  add(operation: RuleNode) {
    this.operations.push(operation);
  }

  run(value: ValuesType | undefined) {
    for (const operation of this.operations) {
      operation.run(value);

      if (this.log) {
        console.log(colorify(
          `${value} => ${operation.name}: ${operation.expected} ✅ `,
          LOG_CLR.SUCCESS
        ));
      }
    }
  }
}
