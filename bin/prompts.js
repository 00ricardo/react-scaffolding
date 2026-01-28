export const projectNamePrompt = {
  type: 'text',
  name: 'projectName',
  message: 'Project name:',
};
export const useMUIPrompt = {
  type: 'toggle',
  name: 'useMUI',
  message: '🎨 Do you want to use MUI as Material Design library?',
  initial: true,
  active: 'Yes',
  inactive: 'No',
};
export const installDependenciesPrompt = {
  type: 'confirm',
  name: 'installDeps',
  message: '📦 Install dependencies now?',
  initial: true,
};
