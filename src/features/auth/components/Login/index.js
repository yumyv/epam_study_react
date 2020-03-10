import {Login} from './component';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {loginUser} from '../../actions';
import {getInfoMessage, getLoggedStatus} from '../../selectors';
import {getLanguage} from '../../../homepage/selectors';

const mapStateToProps = (state) => ({
  infoMessage: getInfoMessage(state),
  isLoggedIn: getLoggedStatus(state),
  language: getLanguage(state)
});

const mapDispatchToProps = {
  loginUser,
};

Login.propTypes = {
  loginUser: PropTypes.func,
  infoMessage: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  language: PropTypes.object,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
