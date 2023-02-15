import { ITodoItem } from '../models/models';

export enum TodosActionTypes {
    LOAD_TODOS = 'todos/load',
    LOADING_TODOS = 'todos/loading',
    LOADED_TODOS = 'todos/loaded',
    LOADING_TODOS_FAILED = 'todos/loading_failed',
    //
    ADD_TODO = 'todos/add',
    ADDING_TODO = 'todos/adding',
    ADDED_TODOS = 'todos/added',
    ADDING_TODOS_FAILED = 'todos/adding_failed',
    //
    DELETE_TODO = 'todos/delete',
    DELETING_TODO = 'todos/deleting',
    DELETED_TODO = 'todos/deleted',
    DELETE_FAILD = 'todos/deleting_faild',
}

// Todo Loading Interfaces
export interface ILoadTodosAction {
    type: TodosActionTypes.LOAD_TODOS;
}

export interface ILoadingTodosAction {
    type: TodosActionTypes.LOADING_TODOS;
}

export interface ILoadedTodosAction{
    type:TodosActionTypes.LOADED_TODOS,
    payload:{
        todos:ITodoItem[]
    }
}

export interface ILoadingTodosFailedAction{
    type:TodosActionTypes.LOADING_TODOS_FAILED
}

// Todo Loading functions

export function loadTodos(): ILoadTodosAction {
  return {
    type: TodosActionTypes.LOAD_TODOS,
  };
}

export function loadingTodos(): ILoadingTodosAction {
  return {
    type: TodosActionTypes.LOADING_TODOS,
  };
}

export function loadedTodos(todos: ITodoItem[]): ILoadedTodosAction {
  return {
    type: TodosActionTypes.LOADED_TODOS,
    payload: {
      todos,
    },
  };
}

export function loadingTodosFailed(): ILoadingTodosFailedAction {
  return {
    type: TodosActionTypes.LOADING_TODOS_FAILED,
  };
}
// End of todo loadings
let auto_id = 0;
// Adding todo interfaces and functions
export interface IAddTodoAction{
    type:TodosActionTypes.ADD_TODO,
    payload:{}
}
export function addTodo(task_description:String): IAddTodoAction {
  auto_id++;
  return {
    type: TodosActionTypes.ADD_TODO,
    payload: {id:auto_id,task:task_description},
  };
}

export interface IAddingTodoAction{
    type:TodosActionTypes.ADDING_TODO,
}
export function addingTodo(): IAddingTodoAction {
  return {
    type: TodosActionTypes.ADDING_TODO,
  };
}

export interface IAddedTodoAction{
    type:TodosActionTypes.ADDED_TODOS,
    payload:{
        todos:ITodoItem
    }
}
export function addedTodo(todos: ITodoItem): IAddedTodoAction {
  return {
    type: TodosActionTypes.ADDED_TODOS,
    payload: {
      todos,
    },
  };
}

export interface IAddingTodoFailedAction{
    type:TodosActionTypes.ADDING_TODOS_FAILED
}
export function addingTodoFailed(): IAddingTodoFailedAction {
  return {
    type: TodosActionTypes.ADDING_TODOS_FAILED,
  };
}

// delete Todo interfaces
export interface IDeleteTodoAction{
  type:TodosActionTypes.DELETE_TODO,
  payload:{index:number}
}
export function deleteTodo(index:number):IDeleteTodoAction {
  return {
    type:TodosActionTypes.DELETE_TODO,
    payload:{index},
  };
}

export interface IDeletingTodoAction{
  type:TodosActionTypes.DELETING_TODO,
}
export function deletingTodo(): IDeletingTodoAction {
  return {
    type: TodosActionTypes.DELETING_TODO,
  };
}

export interface IDeleteTodoFailedAction{
  type:TodosActionTypes.DELETE_FAILD
}
export function deleteTodoFailed(): IDeleteTodoFailedAction {
  return {
    type: TodosActionTypes.DELETE_FAILD,
  };
}

export type TodosAction = ILoadTodosAction | ILoadingTodosAction | ILoadedTodosAction | ILoadingTodosFailedAction | IAddTodoAction | IAddingTodoAction | IAddedTodoAction | IAddingTodoFailedAction | IDeleteTodoAction | IDeleteTodoFailedAction | IDeletingTodoAction;
