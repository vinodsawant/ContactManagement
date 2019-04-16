import {createStore, combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import appReducer from './reducers';
import appMiddleWare from './middleware';
import createHistory from 'history/createHashHistory';

export const routerHistory = createHistory();

const rootReducer = combineReducers({
    app: appReducer,
    form: formReducer
});

const store = createStore(rootReducer, appMiddleWare);

export default store;