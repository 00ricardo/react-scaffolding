import figlet from 'figlet';
import { GRAY, ORANGE, RESET_COLOR } from './colors.js';
import { join } from 'node:path';
import { execSync } from 'node:child_process';
import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'node:fs';
import { readdir, stat, mkdir, readFile, writeFile } from 'fs/promises';
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
        }${RESET_COLOR}`,
    )
    .join('\n');

  console.log(output);
  console.log(RESET_COLOR);
};

export const installDependencies = (projectPath, dependencies = []) => {
  console.log('📦 Installing dependencies...');
  const dependenciesList = dependencies.join(' ');
  /*execSync(`npm install --legacy-peer-deps ${dependenciesList}`, {
    cwd: projectPath,
    stdio: 'inherit',
  });*/
};

export const createFolder = (path, folder_name) => {
  const full_path = join(path, folder_name);
  if (!existsSync(full_path)) mkdirSync(full_path, { recursive: true });
};

export const createFile = (path, file_name, file_content) => {
  const full_path = join(path, file_name);
  writeFileSync(full_path, file_content);
};

/*export const copyFolder = async (sourceFolder, destinationPath) => {
  await cp(sourceFolder, destinationPath, { recursive: true });
};*/

export const copyFolder = async (sourceFolder, destinationPath, props) => {
  const { projectName, author, authorEmail, scaffVersion } = props;
  await mkdir(destinationPath, { recursive: true });

  const entries = await readdir(sourceFolder);

  for (const entry of entries) {
    const srcPath = join(sourceFolder, entry);
    const destPath = join(destinationPath, entry);
    const info = await stat(srcPath);

    if (info.isDirectory()) {
      await copyFolder(srcPath, destPath, props);
    } else {
      let content = await readFile(srcPath, 'utf8');
      content = content.replace('##PROJECT_NAME##', projectName);
      content = content.replace('##CREATED_DATE##', new Date().toUTCString());
      content = content.replace('##AUTHOR_NAME##', author);
      content = content.replace('##AUTHOR_EMAIL##', authorEmail);
      content = content.replace('##VERSION##', scaffVersion);
      await writeFile(destPath, content);
    }
  }
};
