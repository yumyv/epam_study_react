import {Homepage} from './component';
import {connect} from 'react-redux';
import {setBasicContent} from './actions';
import PropTypes from 'prop-types';


const mapDispatchToProps = {
  setBasicContentDispatch: setBasicContent,
};

Homepage.propTypes = {
  setBasicContentDispatch: PropTypes.func.isRequired
};

export default connect(
    null,
    mapDispatchToProps
)(Homepage);
