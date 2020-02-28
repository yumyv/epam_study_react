import {SortMovies} from './component';
import {connect} from 'react-redux';
import {sortByLikes, sortByRating} from '../../actions';
import PropTypes from 'prop-types';

const mapDispatchToProps = {
  sortByLikesDispatch: sortByLikes,
  sortByRatingDispatch: sortByRating
};

SortMovies.propTypes = {
  sortByLikesDispatch: PropTypes.func.isRequired,
  sortByRatingDispatch: PropTypes.func.isRequired
};

export default connect(
    null,
    mapDispatchToProps
)(SortMovies);
