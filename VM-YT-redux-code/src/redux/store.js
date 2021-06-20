
import {createStore} from 'redux';
import laptopReducer from './reducers/reducer';


const store = createStore(laptopReducer);
export default store;