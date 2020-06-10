import {withTranslation} from '../../hocs/withTranslation';
import {Footer} from './component';
import {connect} from 'react-redux';
import {getLanguage} from '../../features/homepage/selectors';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => ({
  language: getLanguage(state)
});

Footer.propTypes = {
  language: PropTypes.object
};

export default withTranslation(connect(
    mapStateToProps
)(Footer));
