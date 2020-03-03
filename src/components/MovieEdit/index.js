import {MovieEdit} from './component';
import {connect} from 'react-redux';
import {getMovies} from '../../features/homepage/selectors';
import PropTypes from 'prop-types';
import {editMovie} from '../../features/homepage/actions';

const mapStateToProps = (state) => ({
  movies: getMovies(state),
});

const mapDispatchToProps = {
  editMovieDispatch: editMovie,
};

MovieEdit.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  editMovieDispatch: PropTypes.func,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieEdit);
