import {MovieCardList} from './component';
import {connect} from 'react-redux';
import {getFilterWord, getMovies} from '../../features/homepage/selectors';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  filterWord: getFilterWord(state),
});

MovieCardList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  filterWord: PropTypes.string
};

export default connect(
    mapStateToProps
)(MovieCardList);
