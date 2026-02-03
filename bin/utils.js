import figlet from 'figlet';
import { GRAY, ORANGE, RESET_COLOR } from './colors.js';
import { join } from 'node:path';
import { writeFileSync, mkdirSync } from 'node:fs';
import fs from 'node:fs';

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

export const createFolder = (path, folder_name) => {
  const full_path = join(path, folder_name);
  if (!existsSync(full_path)) mkdirSync(full_path, { recursive: true });
};

export const createFile = (path, file_name, file_content) => {
  const full_path = join(path, file_name);
  writeFileSync(full_path, file_content);
};

export function installSkeleton(src, dest, props) {
  const { projectName, useMui, depMui, version, author, authorEmail } = props
  
  //Read every file founded
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    if (!useMui && entry.isDirectory() && entry.name === 'MUITheme') {
      continue;
    }
    
    if (entry.isDirectory()) {
      createFolder(dest, entry.name);
      installSkeleton(srcPath, destPath, props);
    } else {
      let content = fs.readFileSync(srcPath, 'utf-8');
      content = content.replace('##projectName##', projectName);
      content = content.replace('##useMui##', useMui ? depMui : '');
      content = content.replace('##version##', version);
      content = content.replace('##author##', author);
      content = content.replace('##authorEmail##', authorEmail);
      createFile(dest, entry.name, content);
    }
  }
}
