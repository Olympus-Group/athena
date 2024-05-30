import * as pkg from '../package.json';
import { Command } from 'commander';

const program = new Command();

program
  .name(pkg.name)
  .version(pkg.version)
  .requiredOption('-s, --schema <file.schema>', 'provide schema')
  .requiredOption('-c, --config <file.json>', 'provide config');

program.parse();

module.exports = {
  options: program.opts()
};
