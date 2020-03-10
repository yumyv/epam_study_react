import {Registration} from './component';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {registerUser} from '../../actions';
import {getInfoMessage} from '../../selectors';
import {getLanguage} from '../../../homepage/selectors';

const mapStateToProps = (state) => ({
  infoMessage: getInfoMessage(state),
  language: getLanguage(state)
});

const mapDispatchToProps = {
  registerUser,
};

Registration.propTypes = {
  registerUser: PropTypes.func,
  infoMessage: PropTypes.string,
  language: PropTypes.object,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Registration);
