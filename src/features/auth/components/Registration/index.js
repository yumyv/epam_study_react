import {Registration} from './component';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {registerUser} from '../../actions';
import {getInfoMessage} from '../../selectors';

const mapStateToProps = (state) => ({
  infoMessage: getInfoMessage(state),
});

const mapDispatchToProps = {
  registerUser,
};

Registration.propTypes = {
  registerUser: PropTypes.func,
  infoMessage: PropTypes.string,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Registration);
