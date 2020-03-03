import {Registration} from './component';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addUser} from '../../actions';

const mapDispatchToProps = {
  addUserDispatch: addUser,
};

Registration.propTypes = {
  addUserDispatch: PropTypes.func,
};

export default connect(
    null,
    mapDispatchToProps
)(Registration);
