
import {createStore,combineReducers} from 'redux';

import reducer from './reducers/reducer';

const rootReducer = combineReducers({
    reducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ / window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__);
export default store;