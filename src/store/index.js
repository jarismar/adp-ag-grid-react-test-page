import { createStore, combineReducers } from 'redux';
import cellComments from '../reducers/cellComments';
import cellErrors from '../reducers/cellErrors';

const store = createStore(
    combineReducers({
        cellComments,
        cellErrors
    })
);

export default store;
