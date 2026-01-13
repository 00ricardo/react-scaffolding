import figlet from 'figlet';
import { GRAY, ORANGE, RESET_COLOR } from './colors.js';
import { join } from 'node:path';
import { execSync } from 'node:child_process';
import { writeFileSync, mkdirSync } from 'node:fs';

export const log_ascii_art_company = () => {
  const ams = figlet.textSync('ams', { font: 'Standard' });
  const osram = figlet.textSync('OSRAM', { font: 'Standard' });

  const amsLines = ams.split('\n');
  const osramLines = osram.split('\n');

  const output = amsLines
    .map(
      (line, i) =>
        `${GRAY}${line}${RESET_COLOR} ${ORANGE}${
          osramLines[i] || ''
        }${RESET_COLOR}`
    )
    .join('\n');

  console.log(output);
  console.log(RESET_COLOR);
};

export const installDependencies = (projectPath, dependencies = []) => {
  console.log('📦 Installing dependencies...');
  const dependenciesList = dependencies.join(' ');
  execSync(`npm install --legacy-peer-deps ${dependenciesList}`, {
    cwd: projectPath,
    stdio: 'inherit',
  });
};

export const cretaeFolder = (path, folder_name) => {
  const full_path = join(path, folder_name);
  mkdirSync(full_path);
};

export const createFile = (path, file_name, file_content) => {
  const full_path = join(path, file_name);
  writeFileSync(full_path, file_content);
};
