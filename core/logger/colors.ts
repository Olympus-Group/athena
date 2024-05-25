export enum LOG_CLR {
  'ERROR' = '31', // Red
  'SUCCESS' = '32', // Green
  'TRACE' = '33', // Yellow
}

export function colorify(message: string, color: LOG_CLR): string {
  return `\x1b[${color}m${message}\x1b[0m`;
}
