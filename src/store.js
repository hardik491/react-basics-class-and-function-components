import { createStore } from 'redux';
import reducer from './reducers/user.reducer';

const store = createStore(reducer);
export default store;