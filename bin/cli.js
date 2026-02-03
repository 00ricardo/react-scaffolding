#!/usr/bin/env node
import prompts from 'prompts';
import { join } from 'node:path';
import { 
  log_ascii_art_company, 
  createFolder, 
  installSkeleton 
} from './utils.js';

const runCLI = async () => {
  log_ascii_art_company();
  console.log('Hello! Welcome to the AMS OSram skeleton project installer');

  const { projectName } = await prompts({
    type: 'text',
    name: 'projectName',
    message: 'Choose your project name:',
  });

  const { useMui } = await prompts({
    type: 'select',
    name: 'useMui',
    message: 'Do you want to use Mui?',
    choices: [
      { title: 'Yes', value: true },
      { title: 'No', value: false }
    ]
  });

  const rootPath = process.cwd();
  const projectPath = join(rootPath, projectName);

  const depMui = useMui ? ',\n    "@mui/material": "^6.4.0",\n    "@mui/icons-material": "^6.4.0",\n    "@emotion/react": "^11.14.0",\n    "@emotion/styled": "^11.14.0"'
  : '';

  createFolder(rootPath, projectName);

  const skeletonPath = join(rootPath, 'bin/skeleton');

  const props = {
    projectName,
    useMui,
    depMui,
    version: '1.0.0',
    author: 'David Briceno and Valerio Goncalves',
    authorEmail: 'david.briceno@ams-osram, valerio.goncalves-ext@ams-osram.com'
  }

  installSkeleton(skeletonPath, projectPath, props);

  console.log('Project created successfully!');
};

runCLI();