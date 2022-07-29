import {compose,createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger'
import { rootReducer } from './root-reducer';

// const curryFunc = (a) => (b,c) => {
//     a+b-c
// }
// const afunc = curryFunc(10)

// afunc(3,4)

const loggerMiddleware = (store) => (next) => (action) => {
    if(!action.type){
        return next(action);
    }
    console.log('type',action.type)
    console.log('payload',action.payload);
    console.log('currentState',store.getState());

    next(action);

    console.log('next state ',store.getState())

}
const middleWares = [loggerMiddleware]
const composedEnhancers = compose(applyMiddleware(...middleWares));
export const store = createStore(rootReducer,undefined,composedEnhancers)

