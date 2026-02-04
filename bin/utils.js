import figlet from 'figlet';
import { GRAY, ORANGE, RESET_COLOR } from './colors.js';
import { join } from 'node:path';
import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import fs from 'node:fs';
import dynamicDependencies from './dynamicDependencies.js';

// ! Function to log ASCII art of the company name
export const log_ascii_art_company = () => {
  const ams = figlet.textSync('ams', { font: 'Standard' });
  const osram = figlet.textSync('OSRAM', { font: 'Standard' });

  const amsLines = ams.split('\n');
  const osramLines = osram.split('\n');

  // ! Combine the two ASCII arts side by side
  const output = amsLines
    .map(
      (line, i) =>
        `${GRAY}${line}${RESET_COLOR} ${ORANGE}${
          osramLines[i] || ''
        }${RESET_COLOR}`,
    )
    .join('\n');

  console.log(output);
  console.log(RESET_COLOR);
};

// ! Function to create a folder
export const createFolder = (path, folder_name) => {
  const full_path = join(path, folder_name);
  if (!existsSync(full_path)) mkdirSync(full_path, { recursive: true });
};

// ! Function to create a file with content
const createFile = (path, file_name, file_content) => {
  const full_path = join(path, file_name);
  writeFileSync(full_path, file_content);
};

// ! Function to add MUI dependencies to package.json content
const addMUIDependencies = (packageJsonContent) => {
  var packageJson = JSON.parse(packageJsonContent);
  packageJson.dependencies = {
    ...packageJson.dependencies,
    ...dynamicDependencies.mui,
  };
  return JSON.stringify(packageJson, null, 2);
};

export function generateProjectBoilerplate(src, dest, props) {
  const { projectName, useMUI, version, author, authorEmail } = props;
  // ! Read every file founded
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    // ! If is a directory, create it and read its content recursively
    if (entry.isDirectory()) {
      createFolder(dest, entry.name);
      generateProjectBoilerplate(srcPath, destPath, props);
    } else {
      // ! If is a file, read its content and replace the placeholders
      let content = fs.readFileSync(srcPath, 'utf-8');
      content = content.replace('##PROJECT_NAME##', projectName);
      content = content.replace('##VERSION##', version);
      content = content.replace('##AUTHOR##', author);
      content = content.replace('##AUTHOR_EMAIL##', authorEmail);

      // ! Add MUI dependencies if the user selected it
      if (useMUI && entry.name === 'package.json') {
        content = addMUIDependencies(content);
      }

      // ! Create the file in the destination folder
      createFile(dest, entry.name, content);
    }
  }
}
