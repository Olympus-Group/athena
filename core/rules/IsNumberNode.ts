import { Node } from './Node';

export default class IsNumberNode implements Node {
  name: string = 'Is number:';
  expected: boolean;

  constructor(isNumber: boolean) {
    this.expected = isNumber;
  }

  run(value: unknown): void {
    const isNumber = !isNaN(value as number) && !isNaN(parseFloat(value as string));
    const result = this.expected ? isNumber : !isNumber;

    if (!result) {
      throw new Error(
        `${value} value must be${this.expected ? '' : ' not'} a number`
      );
    }
  }
}
