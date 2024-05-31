export function MUST_BE_UUID(value: unknown, expected: boolean): string {
  return `${value} value must be${expected ? '' : ' not'} a UUID`;
}
