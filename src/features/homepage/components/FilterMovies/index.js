import {FilterMovies} from './component';
import {connect} from 'react-redux';
import {filterMovies} from '../../actions';
import PropTypes from 'prop-types';

const mapDispatchToProps = {
  filterMoviesDispatch: filterMovies
};

FilterMovies.propTypes = {
  filterMoviesDispatch: PropTypes.func.isRequired
};

export default connect(
    null,
    mapDispatchToProps
)(FilterMovies);
