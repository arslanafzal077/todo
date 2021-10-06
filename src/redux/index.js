import { createStore, applyMiddleware } from 'redux';
import reducers from '@redux/reducers';
import createSagaMiddleware from "redux-saga";
import { rootSaga } from '@redux/sagas';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { persistStore, persistReducer } from 'redux-persist';

// const persistConfig={
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: ['auth']
// }

// const persistedReducer = persistReducer(persistConfig,reducer);

const sagaMiddleware = createSagaMiddleware();

const middleware= applyMiddleware(sagaMiddleware)

export const store = createStore(reducers, middleware);
// export const persistedStore = persistStore(store);
sagaMiddleware.run(rootSaga);
