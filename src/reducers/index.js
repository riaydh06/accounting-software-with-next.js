import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import transactionReducer from './transactionReducer';

const rootReducer = combineReducers({
  form,
  transaction: transactionReducer,
});

export default rootReducer;
