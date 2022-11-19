import { styled } from '../../../styles/stitches.config';

export const Text = styled('span', {
  display: 'block',
  fontFamily: '$base',
  fontSize: '$nano',
  lineHeight: '24px',
  fontWeight: '$bold',
  letterSpacing: '$loose',
  textAlign: 'center',
});

export const Wrapper = styled('button', {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  outline: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  textDecoration: 'none',
  padding: '$small $medium',

  '.icon-start': {
    marginRight: '$xsmall',
  },

  '.icon-end': {
    marginLeft: '$xsmall',
  },

  // Button Primary
  variants: {
    onContrast: {
      false: {
        // Button Primary sem contraste
        backgroundColor: '$brandPrimaryPure',
        color: '$neutralHighPure',

        svg: {
          fill: '$neutralHighPure',
        },

        '&:hover': {
          backgroundColor: '$brandPrimaryMedium',
        },
      },
      true: {
        // Button Primary com contraste
        backgroundColor: '$neutralHighPure',
        color: '$brandPrimaryPure',

        '&:hover': {
          backgroundColor: '$brandPrimaryLight',
        },

        svg: {
          fill: '$brandPrimaryPure',
        },
      },
    },

    disabledStyled: {
      true: {
        cursor: 'not-allowed',
        backgroundColor: '$neutralHighMedium',
        color: '$neutralLowLight',

        svg: {
          fill: '$neutralLowLight',
        },
      },
    },

    border: {
      true: {
        backgroundColor: 'transparent',
        border: '1px solid $statusFocusPure',
        color: '$statusFocusPure',

        svg: {
          fill: '$brandPrimaryPure',
        },

        '&:hover': {
          backgroundColor: '$brandPrimaryPure',
          color: '$brandSecondaryPure',

          svg: {
            fill: '$brandSecondaryPure',
          },
        },
      },
    },
  },

  compoundVariants: [
    {
      disabledStyled: true,
      onContrast: true,
      css: {
        backgroundColor: '$brandPrimaryPure',
        color: '$neutralLowLight',

        svg: {
          fill: '$neutralLowLight',
        },

        '&:hover': {
          backgroundColor: '$neutralHighMedium',
          color: '$neutralLowLight',

          svg: {
            fill: '$neutralLowLight',
          },
        },
      },
    },
    {
      disabledStyled: true,
      onContrast: false,
      css: {
        backgroundColor: '$neutralHighPure',

        svg: {
          fill: '$neutralLowLight',
        },

        '&:hover': {
          backgroundColor: '$neutralHighMedium',
          color: '$neutralHighPure',

          svg: {
            fill: '$neutralLowLight',
          },
        },
      },
    },
    {
      disabledStyled: false,
      onContrast: false,
      border: true,
      css: {
        backgroundColor: 'transparent',
        border: '1px solid $brandPrimaryPure',
        color: '$neutralPrimaryPure',

        svg: {
          fill: '$brandPrimaryPure',
        },

        '&:hover': {
          backgroundColor: '$brandPrimaryPure',
          color: '$brandSecondaryPure',

          svg: {
            fill: '$brandSecondaryPure',
          },
        },
      },
    },
    {
      disabledStyled: false,
      onContrast: true,
      border: true,
      css: {
        backgroundColor: 'transparent',
        border: '1px solid $brandSecondaryPure',
        color: '$brandSecondaryPure',

        svg: {
          fill: '$brandSecondaryPure',
        },

        '&:hover': {
          backgroundColor: '$brandSecondaryPure',
          color: '$neutralHighPure',

          svg: {
            fill: '$neutralHighPure',
          },
        },
      },
    },
  ],

  defaultVariants: {
    onContrast: 'false',
    disabledStyled: 'false',
    border: 'false',
  },
});
