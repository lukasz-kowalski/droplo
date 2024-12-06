'use client';

import { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { LinkFromForm } from '@/features/createLink/LinkForm';
import { recursivelyAddItem, recursivelyRemoveItem, recursivelyMoveItem } from './lib/items';

export interface Link {
  id: string;
  name: string;
  url?: string;
  subElements: Link[];
}

export interface UseMenuStateOutput {
  menuItems: Link[];
  addNewLink: (link: LinkFromForm) => void;
  addNewSubItem: (parentId: string, link: LinkFromForm) => void;
  removeLink: (id: string) => void;
  moveItem: (idToMove: string, idTo?: string) => void;
}

const initialLinks: Link[] = [
  {
    id: '123',
    name: 'Test link',
    url: 'https://test.com',
    subElements: [
      {
        id: '222',
        name: 'Subelement',
        url: 'https://sub.test.com',
        subElements: [
          {
            id: '333',
            name: 'Subelement2',
            url: 'https://sub.test.com',
            subElements: [
              {
                id: '444',
                name: 'Subelement3',
                url: 'https://sub.test.com',
                subElements: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const useMenuState = (): UseMenuStateOutput => {
  const [menuItems, setMenuItems] = useState<Link[]>(initialLinks);

  const addNewLink = useCallback((link: LinkFromForm): void => {
    const newLink: Link = {
      ...link,
      id: uuidv4(),
      subElements: [],
    };

    return setMenuItems((prevState) => [...prevState, newLink]);
  }, []);

  const addNewSubItem = useCallback((parentId: string, link: LinkFromForm) => {
    const newLink: Link = {
      ...link,
      id: uuidv4(),
      subElements: [],
    };

    setMenuItems((prevState) => recursivelyAddItem(parentId, newLink, prevState));
  }, []);

  const removeLink = useCallback((id: string) => {
    setMenuItems((prevState) => recursivelyRemoveItem(id, prevState));
  }, []);

  const moveItem = (idToMove: string, idTo?: string) => {
    setMenuItems((prevState) => {
      const { updatedLinks } = recursivelyMoveItem(prevState, idToMove, idTo);

      return updatedLinks;
    });
  };

  return {
    menuItems,
    addNewLink,
    addNewSubItem,
    removeLink,
    moveItem,
  };
};
