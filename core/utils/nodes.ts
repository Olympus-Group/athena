import IsNumberNode from '../rules/IsNumberNode';
import IsStringNode from '../rules/IsStringNode';
import IsBoolNode from '../rules/IsBoolNode';
import IsUUIDNode from '../rules/IsUUIDNode';
import IsDatetimeNode from '../rules/IsDatetimeNode';
import EqualsNode from '../rules/EqualsNode';
import NotEqualsNode from '../rules/NotEqualsNode';
import MinNode from '../rules/MinNode';
import MaxNode from '../rules/MaxNode';
import IsPositiveNode from '../rules/IsPositiveNode';
import IsNegativeNode from '../rules/IsNegativeNode';
import IsNotEmptyNode from '../rules/IsNotEmptyNode';
import { convertToBool } from './convert';

// Logging imports
import * as ERR_MSG from '../logger/errors';

export function getNodeByName(name: string, value: unknown) {
  if (name === 'isNumber') {
    return new IsNumberNode(convertToBool(value as string));
  } else if (name === 'isString') {
    return new IsStringNode(convertToBool(value as string));
  } else if (name === 'isBool') {
    return new IsBoolNode(convertToBool(value as string));
  } else if (name === 'isUUID') {
    return new IsUUIDNode(convertToBool(value as string));
  } else if (name === 'isDatetime') {
    return new IsDatetimeNode(convertToBool(value as string));
  } else if (name === 'equals') {
    return new EqualsNode(value);
  } else if (name === 'notEquals') {
    return new NotEqualsNode(value);
  } else if (name === 'min') {
    return new MinNode(value as number);
  } else if (name === 'max') {
    return new MaxNode(value as number);
  } else if (name === 'isPositive') {
    return new IsPositiveNode(convertToBool(value as string));
  } else if (name === 'isNegative') {
    return new IsNegativeNode(convertToBool(value as string));
  } else if (name === 'isNotEmpty') {
    return new IsNotEmptyNode(convertToBool(value as string));
  } else {
    throw new Error(ERR_MSG.UNKNOWN_OPTION(name));
  }
}
