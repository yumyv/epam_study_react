import {Actor} from './component';
import {getActors} from '../../features/homepage/selectors';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => ({
  actors: getActors(state)
});

Actor.propTypes = {
  actors: PropTypes.arrayOf(PropTypes.object)
};

export default connect(
    mapStateToProps
)(Actor);
