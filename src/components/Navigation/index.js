import {Navigation} from './component';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getLoggedStatus} from '../../features/auth/selectors';
import {setLoggedOut} from '../../features/auth/actions';
import {getLanguage} from '../../features/homepage/selectors';
import {withTranslation} from '../../hocs/withTranslation';

const mapStateToProps = (state) => ({
  isLoggedIn: getLoggedStatus(state),
  language: getLanguage(state)
});

const mapDispatchToProps = {
  setLoggedOutDispatch: setLoggedOut
};

Navigation.propTypes = {
  isLoggedIn: PropTypes.bool,
  setLoggedOutDispatch: PropTypes.func,
  language: PropTypes.object
};

export default withTranslation(withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation)));
