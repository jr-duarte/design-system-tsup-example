import { createTheme, globalStyles } from '../src/styles/stitches.config';
import { Tiger, Heineken, Amstel } from '../src/styles/Themes';

export const parameters = {
  multipleThemesStitches: {
    values: [
      {
        name: 'Heineken',
        theme: createTheme({
          colors: Heineken,
        }),
      },
      {
        name: 'Amstel',
        theme: createTheme({
          colors: Amstel,
        }),
      },
      {
        name: 'Tiger',
        theme: createTheme({
          colors: Tiger,
        }),
      },
    ],
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  a11y: {
    config: {
      rules: [
        {
          id: 'autocomplete-valid',
          selector: '*:not([autocomplete="nope"])',
        },
        {
          id: 'autocomplete-valid',
          enabled: false,
        },
      ],
    },
  },
};

export const decorators = [
  (Story) => {
    globalStyles();
    return (
      <div>
        <Story />
      </div>
    );
  },
];
