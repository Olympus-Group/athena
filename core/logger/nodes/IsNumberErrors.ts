export function MUST_BE_NUMBER(value: unknown, expected: boolean): string {
  return `${value} value must be${expected ? '' : ' not'} a number`;
}
