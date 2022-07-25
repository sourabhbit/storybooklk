
import { addDecorator } from "@storybook/react";
import  GlobalStyle  from "../src/Styles/GlobalStyles";


export const parameters = {
  backgrounds: {
    default: 'warm-grey',
    values: [
      {
        name: 'warm-grey',
        value: '#FBF9F7',
      },
    ],
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));