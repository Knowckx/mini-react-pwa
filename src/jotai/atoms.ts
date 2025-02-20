import { atom } from 'jotai';

export const SelectAtom = atom<{idx:number, name: string} | null>(null);
