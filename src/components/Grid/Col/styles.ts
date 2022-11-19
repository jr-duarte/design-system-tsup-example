import type * as Stitches from '@stitches/react';

import { styled } from '../../../styles/stitches.config';

const itemsCol: { [item: string]: Stitches.CSS } = {};
const itemsColLg: { [item: string]: Stitches.CSS } = {};

Array(13)
  .fill(0)
  .forEach((_item, index) => {
    itemsCol[`${index}`] = {
      '@lgDown': {
        gridCol: `${index}`,
      },
    };
    itemsColLg[`${index}`] = {
      '@lgUp': {
        gridCol: `${index}`,
      },
    };
  });

const Wrapper = styled('div', {
  variants: {
    col: {
      ...itemsCol,
    },
    collg: {
      ...itemsColLg,
    },
  },
});

export default Wrapper;
