import * as fs from 'fs';
import * as path from 'path';

function checkAccess(filePath: string) {
  try {
    fs.accessSync(filePath);
  } catch (err) {
    throw new Error(`No access to "${filePath}"`);
  }
}

function checkExtension(filePath: string, requiredExt: string) {
  const fileExt = path.extname(filePath);
  if (requiredExt !== fileExt) {
    throw new Error(
      `The file "${filePath}" has wrong extension. Only ${requiredExt} allowed`
    );
  }
}

function validateFile(filePath: string, requiredExt: string) {
  checkAccess(filePath);
  checkExtension(filePath, requiredExt);
}

export function readSchema(filePath: string) {
  const resolvedPath = path.resolve(filePath);
  validateFile(resolvedPath, '.schema');

  try {
    return fs.readFileSync(resolvedPath, 'utf-8');
  } catch (error) {
    throw new Error(`Error reading or parsing file: ${error}`);
  }
}

export function readService(filePath: string) {
  const resolvedPath = path.resolve(filePath);
  validateFile(resolvedPath, '.json');

  try {
    const serviceData = fs.readFileSync(resolvedPath, 'utf8');
    return JSON.parse(serviceData);
  } catch (error) {
    throw new Error(`Error reading or parsing file: ${error}`);
  }
}
