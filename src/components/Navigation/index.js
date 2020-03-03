import {Navigation} from './component';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getLoggedStatus} from '../../features/auth/selectors';
import {setLoggedOut} from '../../features/auth/actions';

const mapStateToProps = (state) => ({
  isLoggedIn: getLoggedStatus(state),
});

const mapDispatchToProps = {
  setLoggedOutDispatch: setLoggedOut
};

Navigation.propTypes = {
  isLoggedIn: PropTypes.bool,
  setLoggedOutDispatch: PropTypes.func,
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation));
