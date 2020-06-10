import {Actor} from './component';
import {getActors, getLanguage} from '../../features/homepage/selectors';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => ({
  actors: getActors(state),
  language: getLanguage(state)
});

Actor.propTypes = {
  actors: PropTypes.arrayOf(PropTypes.object),
  language: PropTypes.object
};

export default connect(
    mapStateToProps
)(Actor);
