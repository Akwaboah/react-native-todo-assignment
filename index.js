/**
* @format
*/
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import React, {Component} from 'react';
import 'reflect-metadata';
import App from './App';
import { container } from 'tsyringe';
container.register < Component > ("Component", {
    useClass: App,
  });
import Todo from './components/Todo';
import { Provider } from 'react-redux';
import store from './reducers/store';

const Root = () => (<Provider store={store}><Todo /></Provider>);
AppRegistry.registerComponent(appName, () => Root);
