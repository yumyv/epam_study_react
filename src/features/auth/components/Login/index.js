import {Login} from './component';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {setLoggedIn} from '../../actions';

const mapDispatchToProps = {
  setLoggedInDispatch: setLoggedIn,
};

Login.propTypes = {
  setLoggedInDispatch: PropTypes.func,
};

export default connect(
    null,
    mapDispatchToProps
)(Login);
