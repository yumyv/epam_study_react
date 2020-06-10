import {Homepage} from './component';
import {connect} from 'react-redux';
import {fetchActors, fetchMovies} from './actions';
import PropTypes from 'prop-types';
import {getMovies, getActors} from './selectors';

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  actors: getActors(state),
});

const mapDispatchToProps = {
  fetchMovies,
  fetchActors
};

Homepage.propTypes = {
  fetchActors: PropTypes.func.isRequired,
  fetchMovies: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object),
  actors: PropTypes.arrayOf(PropTypes.object),
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Homepage);
