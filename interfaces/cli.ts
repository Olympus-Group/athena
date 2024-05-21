const pckg = require('../package.json');
const { Command } = require('commander');

const program = new Command();

program
  .name(pckg.name)
  .version(pckg.version)
  .requiredOption('-s, --schema <file>', 'provide schema')
  .requiredOption('-c, --config <file>', 'provide config');

program.parse();

module.exports = {
    options: program.opts()
}
