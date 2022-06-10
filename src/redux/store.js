import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import { contactReducer } from './contacts/items/items-reducer';
import { filterReducer } from './contacts/filter/filter-reducer';

const contactsListPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const contactsListReducer = combineReducers({
  items: contactReducer,
  filter: filterReducer,
});

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsListPersistConfig, contactsListReducer),
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

const persistor = persistStore(store);

export default { store, persistor };
