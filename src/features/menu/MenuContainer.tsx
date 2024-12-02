'use client';

import { useContext, useState } from 'react';

import { MenuContext } from '@/features/menu/context/MenuContext';

import { EmptyMenu } from './EmptyMenu';

export const MenuContainer = (): JSX.Element => {
  const [links, setLinks] = useState([]);
  const state = useContext(MenuContext);

  if (!links || links.length === 0) {
    return <EmptyMenu />;
  }

  return <></>;
};
