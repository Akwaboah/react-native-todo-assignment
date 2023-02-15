export interface ITodoItem {
  'id':number,
  'task': String,
}
export enum ApiStatus {
  LOADING = 'loading',
  LOADED = 'loaded',
  ADDING = 'Adding',
  DELETE = 'delete',
  FAILED = 'failed',
}
