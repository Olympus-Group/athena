import { ValuesType } from '../utils/types';

export interface Node {
  name: string;
  run: (value: ValuesType) => void;
}
