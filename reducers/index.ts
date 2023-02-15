import { combineReducers } from 'redux';
import todosReducer, {ITodoState, initialTodoState} from './todoReducer';

export interface IState {
  todos: ITodoState;
}

export const initialState = (
  {todos: initialTodoState}
);

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;
