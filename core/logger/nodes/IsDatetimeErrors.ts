export function MUST_BE_DATETIME(value: unknown, expected: boolean): string {
  return `${value} value must be${expected ? '' : ' not'} a datetime`;
}
