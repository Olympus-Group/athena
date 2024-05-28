import { colorify, LOG_CLR } from './colors';
import { REG } from '../utils/regexp';

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

export function UNKNOWN_ACTION(code: string, pos: number): string {
  const start = code.slice(pos);
  const nextLineIndex = start.search(REG.LINE);

  const index = nextLineIndex !== -1 ? nextLineIndex : code.length - 1;

  const line = code.slice(pos, index);

  return colorify(
    'Unknown action on the line:\n',
    LOG_CLR.ERROR
  ) + colorify(
    line,
    LOG_CLR.TRACE
  );
}

export function UNKNOWN_OPTION(name: string) {
  return colorify(
    `Option ${name} is unknown`,
    LOG_CLR.ERROR
  );
}
