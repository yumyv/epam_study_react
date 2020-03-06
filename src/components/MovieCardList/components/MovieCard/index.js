import {MovieCard} from './component';
import {connect} from 'react-redux';
import {updateLikes} from '../../../../features/homepage/actions';
import PropTypes from 'prop-types';

const mapDispatchToProps = {
  updateLikes,
};

MovieCard.propTypes = {
  updateLikes: PropTypes.func.isRequired,
  movie: PropTypes.object
};

export default connect(
    null,
    mapDispatchToProps
)(MovieCard);
