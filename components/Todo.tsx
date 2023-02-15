import {mapStateToDispatch, mapDispatchToProps} from '../reducers/dispatch';
import {connect} from 'react-redux';
import App from '../App';
export default connect(mapStateToDispatch, mapDispatchToProps)(App);
