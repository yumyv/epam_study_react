import {FilterMovies} from './component';
import {connect} from 'react-redux';
import {filterMovies} from '../../actions';
import PropTypes from 'prop-types';
import {getLanguage} from '../../selectors';

const mapStateToProps = (state) => ({
  language: getLanguage(state)
});

const mapDispatchToProps = {
  filterMoviesDispatch: filterMovies
};

FilterMovies.propTypes = {
  filterMoviesDispatch: PropTypes.func.isRequired,
  language: PropTypes.object,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterMovies);
