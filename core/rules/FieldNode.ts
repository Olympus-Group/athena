import { Node } from './Node';
import { ValuesType } from '../utils/types';
import { colorify, LOG_CLR } from '../logger/colors';

export default class FieldNode implements Node {
  name: string = 'Field';
  log: boolean;
  operations: Node[] = [];

  constructor(log: boolean = false) {
    this.log = log;
  }

  add(operation: Node) {
    this.operations.push(operation);
  }

  run(value: ValuesType | undefined) {
    for (const operation of this.operations) {
      operation.run(value);

      if (this.log) {
        console.log(colorify(
          `${value} => ${operation.name}: ✅ `,
          LOG_CLR.SUCCESS
        ));
      }
    }
  }
}
