import { combineReducers } from 'redux';
import BookReducer from './reducerBooks';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: BookReducer,
  ActiveBook: ActiveBook
});

export default rootReducer;
