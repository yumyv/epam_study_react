import {MovieFullCard} from './component';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getMovies, getActors, getLanguage} from '../../features/homepage/selectors';
import {removeMovie} from '../../features/homepage/actions';

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  actors: getActors(state),
  language: getLanguage(state)
});

const mapDispatchToProps = {
  removeMovie,
};

MovieFullCard.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  actors: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeMovie: PropTypes.func.isRequired,
  language: PropTypes.object
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieFullCard);

