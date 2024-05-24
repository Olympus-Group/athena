import { Node } from './Node';
import { ValuesType } from '../utils/types';

export default class FieldNode implements Node {
  name: string = 'Field';
  operations: Node[] = [];

  add(operation: Node) {
    this.operations.push(operation);
  }

  run(value: ValuesType) {
    for (const operation of this.operations) {
      try {
        operation.run(value);
      } catch (error: any) {
        console.log(error.message);
      }
    }
  }
}
