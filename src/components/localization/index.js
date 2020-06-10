import {Localization} from './component';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {setLocalization} from '../../features/homepage/actions';

const mapDispatchToProps = {
  setLocalizationDispatch: setLocalization
};

Localization.propTypes = {
  setLocalizationDispatch: PropTypes.func,
};

export default connect(
    null,
    mapDispatchToProps
)(Localization)
