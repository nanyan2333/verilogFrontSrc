import { configureStore, combineReducers } from '@reduxjs/toolkit';
import routeReducer from './modules/routeSlice';
import userReducer from './modules/userSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';

const persistConfig = {
  key: 'root',
  storage,
};


const rootReducer = combineReducers({
  route: routeReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);


