import {Homepage} from './component';
import {connect} from 'react-redux';
import {setBasicContent} from './actions';
import PropTypes from 'prop-types';
import {getMovies} from './selectors';
import {getLoggedStatus} from '../auth/selectors';

const mapStateToProps = (state) => ({
  movies: getMovies(state)
});

const mapDispatchToProps = {
  setBasicContentDispatch: setBasicContent,
};

Homepage.propTypes = {
  setBasicContentDispatch: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Homepage);
