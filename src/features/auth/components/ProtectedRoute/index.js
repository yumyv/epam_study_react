import {ProtectedRoute} from './component';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getLoggedStatus} from '../../selectors';

const mapStateToProps = (state) => ({
  isLoggedIn: getLoggedStatus(state),
});

ProtectedRoute.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default connect(
    mapStateToProps,
)(ProtectedRoute);
