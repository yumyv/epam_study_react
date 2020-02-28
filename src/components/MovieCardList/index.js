import {MovieCardList} from './component';
import {connect} from 'react-redux';
import {getFilteredMovies} from '../../features/homepage/selectors';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => ({
  filteredMovies: getFilteredMovies(state),
});

MovieCardList.propTypes = {
  filteredMovies: PropTypes.arrayOf(PropTypes.object)
};

export default connect(
    mapStateToProps
)(MovieCardList);
