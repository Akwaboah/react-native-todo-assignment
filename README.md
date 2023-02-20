# Frontend Developer Todo Assignment
This is a react native todo application 
## Overview
This project is designed to test developer skills, and includes the following features:
- Consuming api with axios and implementing redux toolkit for state management 
- Adding a daily task
- Deleting a daily task
## Files 📂 Overview 
- index.js: 
  This file is the entry point of our app.
- App.tsx:
  This file contain the main app component.
- models/models.ts: 
  This file contains some interface and enum which describe the items of our todo and the
  state at which our app is during any action respectively.
- reducers/store.ts: 
  This file contain the Redux store configuration.It also creates an instance of the createEpicMiddleware
  function from the redux-observable package, which will be used to handle the API calls.
- reducers/dispatch.ts: 
  This file contain the Redux mapStateToDispatch and mapDispatchToProps
  configuration. React components accept data from outside via props(maptStateToProps),
  The state values and actions(mapDispatchToProps) passed to the component are available in the props of the component.
- reducers/todosReducer.ts:
  This file will handle the state of the todos.
- reducers/index.ts:
  This file contain the Redux reducers that will combine all the reducers in the app. 
- components/Todo.tsx:
  This file contain the Redux connect configurartion function that help use to connect our or pass 
  mapStateToDispatch,mapDispatchToProps to your component.
- components/Task.tsx: This file renders a component of the todo items on the screen.
- epics/index.ts: 
  This file contain the Redux-Observable epics which is the core primitive of redux-observable.
  It is a function which takes a stream of actions and returns a stream of actions.
- actions/actions.ts: This file contain the Redux action creators which when calls to excute the epics.
- __test__/App-test.ts: 
  This file contains some unit and integration test on our main App.tsx component.
- __test__/Task-test.ts: This file contains a component test of the todo list.

![fetching task](https://github.com/Akwaboah/react-native-todo-assignment/blob/master/fetching%20task.png)
![adding task](https://github.com/Akwaboah/react-native-todo-assignment/blob/master/adding%20task.png)
![new added todo task](https://github.com/Akwaboah/react-native-todo-assignment/blob/master/new%20added%20task.png)
![network error screen](https://github.com/Akwaboah/react-native-todo-assignment/blob/master/network%20error.png)

    
