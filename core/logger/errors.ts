export function EXPECTED(pos: number, expected: string, got: string): string {
  return `On the ${pos} token expected ${expected}, but got ${got}`;
}

export function UNKNOWN_FIELD(name: string): string {
  return `Option ${name} can't be handled cause there is no field specified`;
}
