import IsNumberNode from '../rules/IsNumberNode';
import { convertToBool } from './convert';

export function getNodeByName(name: string, value: unknown) {
  if (name === 'isNumber') {
    return new IsNumberNode(convertToBool(value as string));
  } else {
    throw new Error(`Option ${name} is unknown`);
  }
}
