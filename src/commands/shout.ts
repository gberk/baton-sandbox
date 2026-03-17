import { Command } from 'commander';

export function shoutCommand(): Command {
  return new Command('shout')
    .description('Print an emphatic uppercase greeting')
    .argument('<user-name>', 'Name to greet')
    .action((userName: string) => {
      console.log(`HELLO, ${userName.toUpperCase()}!`);
    });
}
