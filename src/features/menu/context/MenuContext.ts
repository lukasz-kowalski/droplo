'use client';

import { createContext } from 'react';

import { MenuState } from './state';

export const MenuContext = createContext<MenuState | null>(null);
