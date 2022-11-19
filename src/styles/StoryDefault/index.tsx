import React, { ReactNode } from 'react';

import { Wrapper } from './styles';

export type StoryDefaultProps = {
  children: string | ReactNode;
};
export default function StoryDefault({ children }: StoryDefaultProps) {
  return <Wrapper>{children}</Wrapper>;
}
