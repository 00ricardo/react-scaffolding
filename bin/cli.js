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
  createFolder,
  createFile,
  copyFolder,
} from './utils.js';
import {
  projectNamePrompt,
  useMUIPrompt,
  installDependenciesPrompt,
} from './prompts.js';
const runCLI = async () => {
  log_ascii_art_company();

  const { projectName, useMUI } = await prompts([
    projectNamePrompt,
    useMUIPrompt,
  ]);

  const rootPath = process.cwd();
  const projectPath = join(rootPath, projectName);

  // ! Optional: install dependencies
  const { installDeps } = await prompts(installDependenciesPrompt);
  // ! Install dependencies if user agreed
  if (installDeps) installDependencies(projectPath);

  // ! Create folder for the project
  createFolder(rootPath, projectName);
  const skeletonPath = join(rootPath, 'bin', 'skeleton');
  const props = {
    projectName,
    useMUI,
    scaffVersion: '1.0.0',
    author: 'Ricardo',
    authorEmail: 'ealoticopve@gmail.com',
  };
  copyFolder(skeletonPath, projectPath, props);

  // ! Demonstrate colors and emojis
  /*console.log(RED, 'This is red');
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
  console.log('⚠️ Warning Emoji');*/
};

runCLI();
