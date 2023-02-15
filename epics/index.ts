import { from, of } from 'rxjs';
import { isOfType } from 'typesafe-actions';
import { combineEpics, Epic} from 'redux-observable';
import { switchMap, map, startWith, catchError, filter, mergeMap } from 'rxjs/operators';
import axios from 'axios';
import {
  TodosAction,
  TodosActionTypes,
  loadedTodos,
  loadingTodos,
  loadingTodosFailed,
  addingTodo,
  addingTodoFailed,
  deletingTodo,
  deleteTodoFailed,
} from '../actions/todoActions';


export const loadTodosEpic: Epic<TodosAction, TodosAction> = (action$) =>
  action$.pipe(
    filter(isOfType(TodosActionTypes.LOAD_TODOS)),
    switchMap(() =>
      from(axios.get('https://smartcare.pythonanywhere.com/react-todo/load')).pipe(
        map(response => loadedTodos(response.data)),
        startWith(loadingTodos()),
        catchError(() => of(loadingTodosFailed()))
      )
    )
  );

const addTodoEpic: Epic<TodosAction, TodosAction> = (action$) => action$.pipe(
  filter(isOfType(TodosActionTypes.ADD_TODO)),
  mergeMap(action =>
    from(axios.post('https://smartcare.pythonanywhere.com/react-todo/insert', action.payload)).pipe(
      map(response => loadedTodos(response.data)),
      startWith(addingTodo()),
      catchError(() => of(addingTodoFailed()))
    ),
  )
);

const deleteTodoEpic: Epic<TodosAction, TodosAction> = (action$) => action$.pipe(
  filter(isOfType(TodosActionTypes.DELETE_TODO)),
  mergeMap(action =>from(axios.post('https://smartcare.pythonanywhere.com/react-todo/delete',action.payload)).pipe(
      map(response => loadedTodos(response.data)),
      startWith(deletingTodo()),
      catchError(() => of(deleteTodoFailed()))
    ),
  )
);

export default combineEpics(loadTodosEpic,addTodoEpic,deleteTodoEpic);
