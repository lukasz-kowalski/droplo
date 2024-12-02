'use client';

import { useState } from "react";

interface Link {
  id: string;
  name: string;
  url?: string;
  subElements: Link[];
}

export interface MenuState {
  menuItems: Link[];
}

interface UseMenuStateOutput {
  menuItems: Link[];
}

const initialLinks: Link[] = [
  {
    id: '123',
    name: 'Test link',
    url: 'https://test.com',
    subElements: [{
      id: '222',
      name: 'Subelement',
      url: 'https://sub.test.com',
      subElements: []
    }]
  }
]

export const useMenuState = (): UseMenuStateOutput => {
  const [menuItems, setMenuItems] = useState(initialLinks);

  return {
    menuItems
  }
};
