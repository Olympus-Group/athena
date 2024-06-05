import { Node } from './Node';

export interface RuleNode extends Node {
  expected: unknown;
}
