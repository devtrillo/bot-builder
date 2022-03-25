const CracoLessPlugin = require("craco-less");
const { resolve } = require("path");

module.exports = {
  plugins: [
    {
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: { "@primary-color": "#0ab6ff" },
          },
        },
      },
      plugin: CracoLessPlugin,
    },
  ],
  webpack: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
};
