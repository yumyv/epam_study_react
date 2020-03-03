import {Login} from './component';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {setLoggedIn, setUsers} from '../../actions';
import {getUsers} from '../../selectors';

const mapStateToProps = (state) => ({
  users: getUsers(state),
});

const mapDispatchToProps = {
  setLoggedInDispatch: setLoggedIn,
  setUsersDispatch: setUsers
};

Login.propTypes = {
  setLoggedInDispatch: PropTypes.func,
  setUsersDispatch: PropTypes.func,
  users: PropTypes.arrayOf(PropTypes.object),
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
