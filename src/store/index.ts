import create from 'zustand';
import { combine, devtools, persist } from 'zustand/middleware';

import { storeActions, storeInit } from './store';
import { TStoreActions, TStore } from './store.types';

let store = combine<TStore, TStoreActions, any, any>(storeInit, storeActions);

store = persist(store);
store = devtools(store);

const useStore = create<TStore>(store);

export default useStore;
