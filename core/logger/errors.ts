import { colorify, LOG_CLR } from './colors';

export function EXPECTED(pos: number, expected: string, got: string): string {
  return colorify(
    `On the ${pos} token expected ${expected}, but got ${got}`,
    LOG_CLR.ERROR
  );
}

export function UNKNOWN_FIELD(name: string): string {
  return colorify(
    `Option ${name} can't be handled cause there is no field specified`,
    LOG_CLR.ERROR
  );
}

export function UNKNOWN_ACTION(): string {
  return colorify(
    'Unknown action on the line',
    LOG_CLR.ERROR
  );
}

export function WRONG_VALUE_ON_POSITION(pos: number): string {
  return colorify(
    `Wrong value is detected on position ${pos}`,
    LOG_CLR.ERROR
  );
}
