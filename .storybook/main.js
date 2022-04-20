const path = require("path");

/**
 * @type {import('@storybook/core-common').StorybookConfig}
 */
const config = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-docs",
    "@storybook/addon-controls",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
    "@storybook/addon-toolbars",
    {
      name: "@storybook/addon-postcss",
      options: {
        cssLoaderOptions: { importLoaders: 1 },
        postcssLoaderOptions: { implementation: require("postcss") },
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config, { configType }) {
    return {
      ...config,
      envPrefix: "REACT_APP_",
      resolve: {
        ...config.resolve.alias,
        "@": path.resolve("./src"),
      },
    };
  },
};

module.exports = config;
