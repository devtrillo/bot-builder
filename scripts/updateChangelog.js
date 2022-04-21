const fs = require("fs");

const changelog = fs.readFileSync("CHANGELOG.md", "utf8");

const requiredStoryBookData = `import { Meta } from "@storybook/addon-docs";

<Meta title="General Documentation/Changelog" />`;

fs.writeFileSync(
  "src/docs/changelog.stories.mdx",
  `${requiredStoryBookData}\n\n${changelog}`,
  { encoding: "utf-8" }
);
