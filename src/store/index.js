import { createStore, combineReducers } from 'redux';

import reducer from './reducer';
import addReducer from './addReducer';

const rootReducer = combineReducers({
    data: reducer,
    add: addReducer
})

export default createStore(rootReducer);