import { readSchema, readService } from '../interfaces/reader';

describe('file system interface validates files correctly', () => {

  test('throws an error when schema file extension is wrong', () => {
    const filePath = './test/static/3-wrong.conf';
    const testFunc = () => {
      readSchema(filePath);
    };
    expect(testFunc).toThrow();
  });

  test('throws an error when json file extension is wrong', () => {
    const filePath = './test/static/3-wrong.ts';
    const testFunc = () => {
      readService(filePath);
    };
    expect(testFunc).toThrow();
  });

  test('throws an error when there is no such file', () => {
    const filePath = './test/invalid/path/to/1-simple-valid.json';
    const testFunc = () => {
      readService(filePath);
    };
    expect(testFunc).toThrow();
  });

  test('does not throw an error when schema extension and path are right', () => {
    const filePath = './test/static/1-simple.schema';
    const testFunc = () => {
      readSchema(filePath);
    };
    expect(testFunc).not.toThrow();
  });

  test('does not throw an error when json extension and path are right', () => {
    const filePath = './test/static/1-simple-valid.json';
    const testFunc = () => {
      readService(filePath);
    };
    expect(testFunc).not.toThrow();
  });
});
