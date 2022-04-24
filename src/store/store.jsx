import { createStore, combineReducers} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from '../reducers/userReducer';
import authReducer from '../reducers/authReducer';

const persistConfig = {
  key: "root",
  storage
};

const reducers = combineReducers({
  users: userReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { persistor, store};