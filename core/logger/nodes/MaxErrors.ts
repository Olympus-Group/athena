export function MUST_BE_AT_MOST(value: unknown, expected: number): string {
  return `${value} value must be at most ${expected}`;
}
