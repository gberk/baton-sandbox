#!/usr/bin/env node
import { Command } from 'commander';
import { helloCommand } from './commands/hello.js';
import { goodbyeCommand } from './commands/goodbye.js';
import { shoutCommand } from './commands/shout.js';

const program = new Command();

program
  .name('greet')
  .description('A simple greeting CLI')
  .version('1.0.0');

program.addCommand(helloCommand());
program.addCommand(goodbyeCommand());
program.addCommand(shoutCommand());

program.parse();
