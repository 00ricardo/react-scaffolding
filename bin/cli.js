#!/usr/bin/env node
import prompts from 'prompts';
import { execSync } from 'node:child_process';
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import figlet from 'figlet';
import {
  RED,
  GREEN,
  YELLOW,
  BLUE,
  MAGENTA,
  CYAN,
  WHITE,
  GRAY,
  ORANGE,
} from './colors.js';

const run = async () => {
  const ASCII = figlet.textSync('ams osram', { font: 'Standard' });
  console.log(ASCII);
  console.log('Hi Valerio, welcome to your Scaffolding Demo!');

  const { projectName } = await prompts({
    type: 'text',
    name: 'projectName',
    message: 'Project name:',
  });

  const { template } = await prompts({
    type: 'select',
    name: 'template',
    message: 'Choose a template',
    choices: [
      { title: 'Basic', value: 'basic' },
      { title: 'Advanced', value: 'advanced' },
    ],
  });

  // Create folder & simple file
  const projectPath = join(process.cwd(), projectName);
  mkdirSync(projectPath);
  writeFileSync(
    join(projectPath, 'index.js'),
    `// This is a comment in index.js!\n// Template: ${template}\nconsole.log('Hello!');`
  );

  console.log(`Project created in ${projectPath}`);

  // Optional: install dependencies
  const { installDeps } = await prompts({
    type: 'confirm',
    name: 'installDeps',
    message: 'Install dependencies now?',
    initial: true,
  });

  if (installDeps) {
    execSync('npm install --legacy-peer-deps', {
      cwd: projectPath,
      stdio: 'inherit',
    });
  }

  console.log(RED, 'This is red');
  console.log(GREEN, 'This is green');
  console.log(YELLOW, 'This is yellow');
  console.log(BLUE, 'This is blue');
  console.log(MAGENTA, 'This is magenta');
  console.log(CYAN, 'This is cyan');
  console.log(WHITE, 'This is white');
  console.log(GRAY, 'This is gray');
  console.log(ORANGE, 'This is orange');
  console.log('🎉 Party Emoji!');
  console.log('⚠️ Warning Emoji');
};

run();
