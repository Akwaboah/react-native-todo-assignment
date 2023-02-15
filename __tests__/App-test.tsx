import React from 'react';
import {Provider} from 'react-redux';
import store from '../reducers/store';
import {connect} from 'react-redux';
import App from '../App';
import {mapStateToDispatch, mapDispatchToProps} from '../reducers/dispatch';
import {act, create, ReactTestRenderer} from 'react-test-renderer';
import {IState} from '../reducers';
import {ApiStatus} from '../models/models';

const ConnectedComponent = connect(mapStateToDispatch, mapDispatchToProps)(App);

describe('Main app to match first snapshot', () => {

  it('Must match snapshoot', done => {
    let wrapper: ReactTestRenderer;
    act(() => {
      wrapper = create(
        <Provider store={store}>
          <ConnectedComponent />
        </Provider>,
      );
    });
    setTimeout(() => {
      // expect(wrapper.getByText('My Todos')).toBeTruthy();
      expect(wrapper).toMatchSnapshot();
      done();
    }, 1000);
  });

  let mockState: IState;

  beforeEach(() => {
    // mockDispatch = {loadTodos:jest.fn(),addTodo:jest.fn(), deleteTodo:jest.fn()};
    mockState = {
      todos: {
        loadingStatus: ApiStatus.LOADING,
        addingStatus: ApiStatus.ADDING,
        deletingStatus: ApiStatus.DELETE,
        todos: [
          {
            id: 2,
            task: 'String',
          },
        ],
      },
    };
  });

  it('maps state to props correctly', () => {
    const props = mapStateToDispatch(mockState);
    expect(props.loadingStatus).toEqual(mockState.todos.loadingStatus);
  });
});
