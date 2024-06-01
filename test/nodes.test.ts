import IsNegativeNode from '../core/rules/IsNegativeNode';
import MinNode from '../core/rules/MinNode';
import IsNumberNode from '../core/rules/IsNumberNode';
import EqualsNode from '../core/rules/EqualsNode';
import MaxNode from '../core/rules/MaxNode';
import IsPositiveNode from '../core/rules/IsPositiveNode';
import IsBoolNode from '../core/rules/IsBoolNode';
import IsStringNode from '../core/rules/IsStringNode';
import IsNotEmptyNode from '../core/rules/IsNotEmptyNode';
import IsUUIDNode from '../core/rules/IsUUIDNode';
import IsDatetimeNode from '../core/rules/IsDatetimeNode';
import NotEqualsNode from '../core/rules/NotEqualsNode';


describe('All run() methods of Nodes work correctly', () => {

  test('numbers are checked correctly', () => {
    const isNumber = new IsNumberNode(false);
    expect(() => isNumber.run(5)).toThrow();
    expect(() => isNumber.run('wow')).not.toThrow();

    const isNegative = new IsNegativeNode(true);
    expect(() => isNegative.run(-5)).not.toThrow();
    expect(() => isNegative.run(5)).toThrow();
    expect(() => isNegative.run('hell0')).toThrow();

    const isPositive = new IsPositiveNode(true);
    expect(() => isPositive.run(-5)).toThrow();
    expect(() => isPositive.run(100)).not.toThrow();

    const equals = new EqualsNode(10);
    expect(() => equals.run('HI')).toThrow();
    expect(() => equals.run(10)).not.toThrow();

    const min = new MinNode('5' as unknown as number);
    expect(() => min.run(3)).toThrow();
    expect(() => min.run(6)).not.toThrow();

    const max = new MaxNode('5' as unknown as number);
    expect(() => max.run(55)).toThrow();
    expect(() => max.run(0)).not.toThrow();
  });

  test('strings are checked correctly', () => {
    const isString = new IsStringNode(true);
    expect(() => isString.run('h3llo')).not.toThrow();
    expect(() => isString.run(222)).toThrow();
    expect(() => isString.run(true)).toThrow();

    const equals = new EqualsNode('super string');
    expect(() => equals.run('super string')).not.toThrow();
    expect(() => equals.run(true)).toThrow();
    expect(() => equals.run('suPer string')).toThrow();
    expect(() => equals.run(1)).toThrow();

    const notEquals = new NotEqualsNode('hi there');
    expect(() => notEquals.run('hi there')).toThrow();
    expect(() => notEquals.run(true)).not.toThrow();
    expect(() => notEquals.run('HI there')).not.toThrow();
    expect(() => notEquals.run(1)).not.toThrow();

    const isNotEmpty = new IsNotEmptyNode(true);
    expect(() => isNotEmpty.run('super wow string')).not.toThrow();
    expect(() => isNotEmpty.run('')).toThrow();
  });

  test('bool is checked correctly', () => {
    const isBool = new IsBoolNode(true);
    expect(() => isBool.run(5)).toThrow();
    expect(() => isBool.run(true)).not.toThrow();
    expect(() => isBool.run(false)).not.toThrow();

    const equals = new EqualsNode(false);
    expect(() => equals.run(5)).toThrow();
    expect(() => equals.run(false)).not.toThrow();
    expect(() => equals.run(true)).toThrow();

    const notEquals = new NotEqualsNode(true);
    expect(() => notEquals.run(5)).not.toThrow();
    expect(() => notEquals.run(false)).not.toThrow();
    expect(() => notEquals.run(true)).toThrow();
  });

  test('UUID is checked correctly', () => {
    const isUUID = new IsUUIDNode(true);
    expect(() => isUUID.run('6fb36f74-ced1-4add-b40d-0ff9f16af165')).not.toThrow();
    expect(() => isUUID.run(10)).toThrow();
  });

  test('Datetime is checked correctly', () => {
    const isDatetime = new IsDatetimeNode(true);
    expect(() => isDatetime.run('2024-05-22T21:23:50Z')).not.toThrow();
    expect(() => isDatetime.run('56/33/1')).toThrow();
  });
});
