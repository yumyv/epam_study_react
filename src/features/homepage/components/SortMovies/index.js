import {SortMovies} from './component';
import {connect} from 'react-redux';
import {sortByLikes, sortByRating} from '../../actions';
import PropTypes from 'prop-types';
import {getLanguage} from '../../../homepage/selectors';

const mapStateToProps = (state) => ({
  language: getLanguage(state)
});

const mapDispatchToProps = {
  sortByLikesDispatch: sortByLikes,
  sortByRatingDispatch: sortByRating
};

SortMovies.propTypes = {
  sortByLikesDispatch: PropTypes.func.isRequired,
  sortByRatingDispatch: PropTypes.func.isRequired,
  language: PropTypes.object
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SortMovies);
