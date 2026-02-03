export default {
  framework: "@storybook/react-vite",
  stories: [
    "../stories/intro.stories.jsx", // default story
    "../stories/**/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  logLevel: "warn",
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
};
