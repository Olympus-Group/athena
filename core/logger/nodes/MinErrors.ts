export function MUST_BE_AT_LEAST(value: unknown, expected: number): string {
  return `${value} value must be at least ${expected}`;
}
