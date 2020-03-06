import {Login} from './component';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {loginUser} from '../../actions';
import {getInfoMessage, getLoggedStatus} from '../../selectors';

const mapStateToProps = (state) => ({
  infoMessage: getInfoMessage(state),
  isLoggedIn: getLoggedStatus(state),
});

const mapDispatchToProps = {
  loginUser,
};

Login.propTypes = {
  loginUser: PropTypes.func,
  infoMessage: PropTypes.string,
  isLoggedIn: PropTypes.bool,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
