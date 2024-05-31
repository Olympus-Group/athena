export function MUST_BE_POSITIVE(value: unknown, expected: boolean): string {
  return `${value} value must be${expected ? '' : ' not'} positive`;
}
