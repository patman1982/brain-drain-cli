#!/usr/bin/env node
import 'dotenv/config';
import { Command } from '@commander-js/extra-typings';

const program = new Command()
  .name('brain-drain')
  .description('CLI tool for brain-drain workflow')
  .version('1.0.0');

program.parse();
