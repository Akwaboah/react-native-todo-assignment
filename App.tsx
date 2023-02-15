/* eslint-disable react-native/no-inline-styles */
import 'reflect-metadata';
import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Platform,
  ToastAndroid,
} from 'react-native';
import { injectable } from 'tsyringe';
import Task from './components/Task';
import {ApiStatus, ITodoItem} from './models/models';

@injectable()
class App extends React.Component<AppProps, {task: String}> {
  constructor(props: AppProps | Readonly<AppProps>) {
    super(props);
    this.state = {task: ''};
  }

  componentDidMount() {
    this.props.loadTodos();
  }

  handleAddTask = () => {
    let taskData = this.state.task;
    if (taskData.trim() === '') {
      ToastAndroid.showWithGravity('Please enter your task',ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      return;
    }
    this.props.addTodo(taskData);
    this.setState({task: ''});
    Keyboard.dismiss();
  };

  OnchangeTask = (val: String) => {
    this.setState({task: val});
  };

  RemoveTask = (todo_id: number) => {
    this.props.deleteTodo(todo_id);
  };

  render() {
    const {todos, loadingStatus} = this.props;
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="handled">
          <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}>My Daily Task</Text>
            <View style={styles.items}>
              {loadingStatus === ApiStatus.LOADING && (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{color: 'green', fontFamily: 'bold', fontSize: 18}}>
                    Please wait, fetching task...
                  </Text>
                </View>
              )}
              {loadingStatus === ApiStatus.FAILED && (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{color: 'red', fontFamily: 'bold', fontSize: 18}}>
                    Connection error...
                  </Text>
                </View>
              )}
              {loadingStatus === ApiStatus.LOADED && todos.length === 0 && (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontFamily: 'bold', fontSize: 18}}>
                    Task empty, add new ....
                  </Text>
                </View>
              )}

              {loadingStatus === ApiStatus.LOADED &&
                todos.length > 0 &&
                todos.map(todo => (
                  <TouchableOpacity
                    key={todo.id}
                    onPress={() => {
                      this.RemoveTask(todo.id);
                    }}>
                    <Task text={todo.task} />
                  </TouchableOpacity>
                ))}
            </View>
          </View>
        </ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.writeTaskWrapper}>
          <TextInput
            style={styles.input}
            value={this.state.task.toString()}
            placeholder={'enter task here'}
            onChangeText={text => this.OnchangeTask(text)}
          />
          <TouchableOpacity testID="add_task" onPress={() => this.handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 8,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    height: 45,
  },
  addWrapper: {
    width: 60,
    height: 45,
    backgroundColor: '#FFF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});

// Define props coming from redux store
export interface IAppStateProps {
  loadingStatus: ApiStatus;
  todos: ITodoItem[];
}

// Define props that are action creators
export interface IAppDispatchProps {
  loadTodos: () => void;
  addTodo: (task_description: String) => void;
  deleteTodo: (id: number) => void;
}

type AppProps = IAppStateProps & IAppDispatchProps;
