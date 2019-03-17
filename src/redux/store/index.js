import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import mainMiddleware from '../../middleware/main';
import { persistStore, persistReducer } from 'redux-persist';
import localForage from 'localforage';
import thunk from 'redux-thunk';

 const persistConfig = {
     key: 'root',
     storage: localForage
     // whitelist: ['user'],
     // blacklist: ['']
 };

 const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, 
    applyMiddleware(thunk, mainMiddleware));

 export const persistor = persistStore(store);

export default store;