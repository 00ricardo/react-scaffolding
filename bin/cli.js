#!/usr/bin/env node
import prompts from 'prompts';
import { join } from 'node:path';
import {
  log_ascii_art_company,
  createFolder,
  generateProjectBoilerplate,
} from './utils.js';
import { projectNamePrompt, useMUIPrompt } from './prompts.js';
import { GREEN, RESET_COLOR } from './colors.js';
const runCLI = async (args) => {
  // ! Define variables
  var projectName, useMUI;

  // ! Log ASCII art company name
  log_ascii_art_company();
  console.log('Welcome to the ams OSRAM Boilerplate Generator! 🚀');

  if (args?.projectName && args?.useMUI) {
    // ! If arguments are provided, use them directly
    var { projectName, useMUI } = {
      projectName: args.projectName,
      useMUI: args.useMUI,
    };
  } else {
    // ! Ask the user for project details
    var { projectName, useMUI } = await prompts([
      projectNamePrompt,
      useMUIPrompt,
    ]);
  }
  // ! Define paths
  const rootPath = process.cwd();
  const projectPath = join(rootPath, projectName);

  // ! Create project folder (if not exists)
  createFolder(rootPath, projectName);

  // ! Define props to replace substitution strings in the boilerplate placeholders
  const props = {
    projectName,
    useMUI,
    version: '1.0.0',
    author: 'David Briceno and Valerio Goncalves',
    authorEmail: 'david.briceno@ams-osram, valerio.goncalves-ext@ams-osram.com',
  };

  // ! Define boilerplate path
  const boilerplatePath = join(rootPath, 'bin/skeleton');

  // ! Generate project boilerplate
  generateProjectBoilerplate(boilerplatePath, projectPath, props);

  console.log(GREEN, 'Project created successfully! ✅');
  console.log(RESET_COLOR);
};

runCLI();
