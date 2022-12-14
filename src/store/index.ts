import { APP_NAME } from 'constants/config';
import create from 'zustand';
import { combine, devtools, persist } from 'zustand/middleware';

import { storeActions, storeInit } from './store';
import { TStoreActions, TStore } from './store.types';

let store = combine<TStore, TStoreActions, any, any>(storeInit, storeActions);

store = persist(store, {
  name: APP_NAME,
});
store = devtools(store, {
  name: APP_NAME,
});

const useTodoStore = create<TStore>(store);

export default useTodoStore;
