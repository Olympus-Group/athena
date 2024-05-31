export function MUST_BE_STRING(value: unknown, expected: boolean): string {
  return `${value} value must be${expected ? '' : ' not'} a string`;
}
