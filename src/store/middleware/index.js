import {applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

const appMiddleware = applyMiddleware(
    thunkMiddleware
);

export default appMiddleware;