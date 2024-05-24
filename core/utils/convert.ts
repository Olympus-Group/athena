export function convertToBool(value: string): boolean {
  if (!['true', 'false'].includes(value)) {
    throw new Error(
      `${value} value must have a Boolean (true/false) type`
    );
  }

  return value === 'true';
}
