export function MUST_BE_BOOL(value: unknown, expected: boolean): string {
  return `${value} value must be${expected ? '' : ' not'} a boolean`;
}
