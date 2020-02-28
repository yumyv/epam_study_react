import {MovieCard} from './component';
import {connect} from 'react-redux';
import {addCurrentMovie, changeCountOfLikes} from '../../../../features/homepage/actions';
import PropTypes from 'prop-types';

const mapDispatchToProps = {
  addCurrentMovieDispatch: addCurrentMovie,
  changeCountOfLikesDispatch: changeCountOfLikes,
};

MovieCard.propTypes = {
  addCurrentMovieDispatch: PropTypes.func.isRequired,
  changeCountOfLikesDispatch: PropTypes.func.isRequired,
  movie: PropTypes.object
};

export default connect(
    null,
    mapDispatchToProps
)(MovieCard);
