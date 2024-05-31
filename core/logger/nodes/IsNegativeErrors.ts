export function MUST_BE_NEGATIVE(value: unknown, expected: boolean): string {
  return `${value} value must be${expected ? '' : ' not'} negative`;
}
