import { Command } from 'commander';

export function shoutCommand(): Command {
  return new Command('shout')
    .description('Print an emphatic uppercase greeting')
    .argument('<name>', 'Name to greet')
    .action((name: string) => {
      console.log(`HELLO, ${name.toUpperCase()}!`);
    });
}
