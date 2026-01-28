import {
  gitignoreContent,
  viteConfigContent,
  eslintrcContent,
  packageJsonContent,
} from './appFilesContent.js';

const applicationLevelSkeleton = {
  folders: [
    {
      name: '',
      // ! Root level files
      files: [
        { name: '.gitignore', content: gitignoreContent },
        { name: '.eslintrc', content: eslintrcContent },
        {
          name: 'package.json',
          content: packageJsonContent,
        },
        { name: 'README.md', content: '' },
        { name: 'vite-config.js', content: viteConfigContent },
      ],
    },
    {
      name: 'src/api',
      files: [
        { name: 'modules.js', content: '' },
        { name: 'auth.js', content: '' },
        { name: 'index.js', content: '' },
      ],
    },
    {
      name: 'src/constants',
      files: [
        { name: 'colors.js', content: '' },
        { name: 'messages.js', content: '' },
        { name: 'codes.js', content: '' },
        { name: 'auth.js', content: '' },
      ],
    },
    {
      name: 'src/hooks',
      files: [
        { name: 'useORDS.js', content: '' },
        { name: 'useNotification.js', content: '' },
        { name: 'useLocalStorage.js', content: '' },
        { name: 'useDebounce.js', content: '' },
      ],
    },
    {
      name: 'src/redux',
      files: [
        { name: 'store.js', content: '' },
        { name: 'actions.js', content: '' },
        { name: 'actionTypes.js', content: '' },
      ],
    },
    {
      name: 'src/redux/reducers',
      files: [
        { name: 'index.js', content: '' },
        { name: 'userReducer.js', content: '' },
        { name: 'dataReducer.js', content: '' },
      ],
    },
    {
      name: 'src/redux/sagas',
      files: [
        { name: 'index.js', content: '' },
        { name: 'userSaga.js', content: '' },
        { name: 'dataSaga.js', content: '' },
      ],
    },
    {
      name: 'src/components',
      files: [
        { name: 'App.jsx', content: '' },
        { name: 'Header.jsx', content: '' },
        { name: 'Footer.jsx', content: '' },
      ],
    },
    {
      name: 'src/utils',
      files: [
        { name: 'apiClient.js', content: '' },
        { name: 'formatDate.js', content: '' },
        { name: 'calculateSum.js', content: '' },
      ],
    },
  ],
};

export default applicationLevelSkeleton;
