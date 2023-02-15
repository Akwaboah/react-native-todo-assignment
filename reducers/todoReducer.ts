import produce from 'immer';
import { TodosAction, TodosActionTypes } from '../actions/todoActions';
import { ApiStatus, ITodoItem } from '../models/models';

export interface ITodoState {
    loadingStatus: ApiStatus;
    addingStatus: ApiStatus;
    deletingStatus: ApiStatus;
    todos: ITodoItem[];
}

export const initialTodoState: ITodoState = {
    loadingStatus: ApiStatus.LOADING,
    addingStatus: ApiStatus.LOADED,
    deletingStatus: ApiStatus.DELETE,
    todos: [],
};

export default function todosReducer(state: ITodoState = initialTodoState, action: TodosAction) {
    return produce(state, draft => {
      switch (action.type) {
        case TodosActionTypes.LOAD_TODOS:
        case TodosActionTypes.LOADING_TODOS:
          draft.loadingStatus = ApiStatus.LOADING;
          break;

        case TodosActionTypes.LOADING_TODOS_FAILED:
          draft.loadingStatus = ApiStatus.FAILED;
          break;

        case TodosActionTypes.LOADED_TODOS:
          draft.loadingStatus = ApiStatus.LOADED;
          draft.todos = action.payload.todos;
          break;

        case TodosActionTypes.ADD_TODO:
        case TodosActionTypes.ADDING_TODO:
          draft.addingStatus = ApiStatus.LOADING;
          break;

        case TodosActionTypes.ADDING_TODOS_FAILED:
          draft.addingStatus = ApiStatus.FAILED;
          break;

        case TodosActionTypes.ADDED_TODOS:
          draft.todos.push(action.payload.todos);
          break;

        case TodosActionTypes.DELETE_TODO:
          draft.loadingStatus = ApiStatus.DELETE;
          draft.todos.filter(todo => todo.id !== action.payload.index);
          break;
      }
    });
}
