import IsNumberNode from '../rules/IsNumberNode';
import { convertToBool } from './convert';

// Logging imports
import * as ERR_MSG from '../logger/errors';

export function getNodeByName(name: string, value: unknown) {
  if (name === 'isNumber') {
    return new IsNumberNode(convertToBool(value as string));
  } else {
    throw new Error(ERR_MSG.UNKNOWN_OPTION(name));
  }
}
