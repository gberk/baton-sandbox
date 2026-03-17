import { Command } from 'commander';

export function goodbyeCommand(): Command {
  return new Command('goodbye')
    .description('Print a farewell')
    .argument('<name>', 'Name to bid farewell')
    .action((name: string) => {
      console.log(`Goodbye, ${name}!`);
    });
}
