import { StateCreator } from 'zustand';
import { TStore, TStoreActions } from './store.types';

export const storeInit: TStore = {};

export const storeActions: StateCreator<TStore, any, any, TStoreActions> = (set, get) => ({});
