import { Command } from 'commander';

export function helloCommand(): Command {
  return new Command('hello')
    .description('Print a greeting')
    .argument('<name>', 'Name to greet')
    .action((name: string) => {
      console.log(`Hello, ${name}!`);
    });
}
