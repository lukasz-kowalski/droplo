'use client';

import { useContext } from 'react';

import { MenuContext } from '@/features/menu/context/MenuContext';

import { EmptyMenu } from './EmptyMenu';

export const MenuContainer = (): JSX.Element => {
  const state = useContext(MenuContext);

  if (!state?.menuItems || state.menuItems.length === 0) {
    return <EmptyMenu />;
  }

  console.log(state.menuItems);

  const addLink = () => {
    state.moveItem('444', '222');
  };

  return (
    <>
      <button onClick={addLink}>Add link</button>
      {state.menuItems.map((item) => {
        return <p key={item.id}>{item.name}</p>;
      })}
    </>
  );
};
