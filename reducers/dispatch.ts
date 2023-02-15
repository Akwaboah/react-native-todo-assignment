import { IAppStateProps, IAppDispatchProps } from '../App';
import { IState } from '../reducers/index';
import { addTodo, deleteTodo, loadTodos } from '../actions/todoActions';

//am using this file to handle props and state attachment to my redux component

export function mapStateToDispatch(state: IState): IAppStateProps {
    return {
        loadingStatus: state.todos.loadingStatus,
        todos: state.todos.todos,
    };
}

export const mapDispatchToProps: IAppDispatchProps = {
    addTodo,
    deleteTodo,
    loadTodos,
};
