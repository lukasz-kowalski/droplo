'use client';

import { createContext } from 'react';

import { UseMenuStateOutput } from './state';

export const MenuContext = createContext<UseMenuStateOutput | null>(null);
