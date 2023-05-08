import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import { Theme } from "../../src/app/providers/ThemeProvider";

import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator],
};

export default preview;

// const preview = {
//   parameters: {
//     actions: { argTypesRegex: "^on[A-Z].*" },
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/,
//       },
//     },
//   },
//   decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator],
// };

// export default preview;

// import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
// import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
// import { Theme } from "../../src/app/providers/ThemeProvider";
// import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
// import { addDecorator } from "@storybook/react";

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// };

// addDecorator(StyleDecorator);
// addDecorator(ThemeDecorator(Theme.LIGHT));
// addDecorator(RouterDecorator);
