'use client';

import { PropsWithChildren } from 'react';

import { MenuContext } from '@/features/menu/context/MenuContext';
import { useMenuState } from '@/features/menu/context/state';

export const Providers = ({ children }: PropsWithChildren) => {
  const state = useMenuState();

  return <MenuContext.Provider value={state}>{children}</MenuContext.Provider>;
};
