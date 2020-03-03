import {ProtectedRoute} from './component';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getLoggedStatus} from '../../selectors';

const mapStateToProps = (state) => ({
  isLoggedIn: getLoggedStatus(state),
});

ProtectedRoute.propTypes = {
  isLoggedIn: PropTypes.boolean,
};

export default connect(
    mapStateToProps,
)(ProtectedRoute);
