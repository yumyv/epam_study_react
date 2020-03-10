import {MovieCardList} from './component';
import {connect} from 'react-redux';
import {getFilterWord, getMovies, getLanguage} from '../../features/homepage/selectors';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  filterWord: getFilterWord(state),
  language: getLanguage(state)
});

MovieCardList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  filterWord: PropTypes.string,
  language: PropTypes.object
};

export default connect(
    mapStateToProps
)(MovieCardList);
