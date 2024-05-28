// Logic imports
import Lexer from './core/Lexer';
import Parser from './core/Parser';

// Types imports
import { FieldsType } from './core/utils/types';
import Token from './core/token/Token';

// Interfaces imports
import { readSchema, readService } from './interfaces/reader';

function getFieldsDescription(schemaContent: string): FieldsType {
  const lexer: Lexer = new Lexer(schemaContent);
  const tokens: Token[] = lexer.analyse();

  const parser: Parser = new Parser(tokens, true);
  return parser.parse();
}

// Entry point function
(function main() {
  // Reading CLI options
  const { options } = require('./interfaces/cli');
  const { schema, config: service } = options;

  // Reading files content
  const schemaContent: string = readSchema(schema);
  const serviceContent: object = readService(service);

  // Getting list of fields descriptions
  const fields = getFieldsDescription(schemaContent);

  // Iterating JSON fields
  for (const [name, value] of Object.entries(serviceContent)) {
    const field = fields.get(name);
    if (!field) {
      console.log(`⚠️ Field ${name} isn't described in the schema`);
      continue;
    }

    field.run(value);
    fields.delete(name);
  }

  // Successful ending
  if (fields.size === 0) return;

  // Not described options
  for (const [_, node] of Array.from(fields)) {
    node.run(undefined);
  }
})();
