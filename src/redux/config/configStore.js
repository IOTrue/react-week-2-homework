//configStore.js
import { createStore, combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage";
//localStorage 사용 : import storage from 'redux-persist/lib/storage
//sessionStorage 사용 : import storageSession from 'redux-persist/lib/storage/session

import todos from '../modules/todo';

const persistConfig = {
    key: "root", //root : 최상단의 파일부터 적용
    storage: storageSession, //SessionStorage 저장, storage -> LocalStorage
    whitelist: ["todos"] //저장할 reducer
    //blacklist: ["이것만 제외"]
    
};

const rootReducer = combineReducers({ todos });
const perReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(perReducer); 

export default store;