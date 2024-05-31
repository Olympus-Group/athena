export function MUST_NOT_EQUAL(value: unknown, expected: unknown): string {
  return `${value} value must not equal ${expected}`;
}
