#!/usr/bin/env node
import prompts from 'prompts';
import { join } from 'node:path';
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
  RESET_COLOR,
} from './colors.js';
import {
  log_ascii_art_company,
  installDependencies,
  cretaeFolder,
  createFile,
} from './utils.js';

const runCLI = async () => {
  log_ascii_art_company();
  console.log('Hi Valerio, welcome to your Scaffolding Demo!');

  const { projectName } = await prompts({
    type: 'text',
    name: 'projectName',
    message: 'Project name:',
  });

  const { template } = await prompts({
    type: 'select',
    name: 'template',
    message: '🎨 Choose a template',
    choices: [
      { title: 'Basic', value: 'basic' },
      { title: 'Advanced', value: 'advanced' },
    ],
  });

  // ! Create folder for the project
  const rootPath = process.cwd();
  cretaeFolder(rootPath, projectName);

  // ! Create file inside the folder
  const projectPath = join(rootPath, projectName);
  createFile(
    projectPath,
    'index.js',
    `// This is a comment in index.js!\n// Template: ${template}\nconsole.log('Hello!');`
  );

  // ! Optional: install dependencies
  const { installDeps } = await prompts({
    type: 'confirm',
    name: 'installDeps',
    message: '📦 Install dependencies now?',
    initial: true,
  });

  // ! Install dependencies if user agreed
  if (installDeps) installDependencies(projectPath);

  // ! Demonstrate colors and emojis
  console.log(RED, 'This is red');
  console.log(GREEN, 'This is green');
  console.log(YELLOW, 'This is yellow');
  console.log(BLUE, 'This is blue');
  console.log(MAGENTA, 'This is magenta');
  console.log(CYAN, 'This is cyan');
  console.log(WHITE, 'This is white');
  console.log(GRAY, 'This is gray');
  console.log(ORANGE, 'This is orange');

  // ! Mandatory reset at the end to avoid color bleeding in terminal
  console.log(RESET_COLOR);

  console.log('🎉 Party Emoji!');
  console.log('⚠️ Warning Emoji');
};

runCLI();
