export function MUST_NOT_BE_EMPTY(value: unknown, expected: boolean): string {
  return `${value} value must be${expected ? ' not' : ''} empty`;
}
