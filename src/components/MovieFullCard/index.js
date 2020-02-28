import {MovieFullCard} from './component';
import {connect} from 'react-redux';
import {getCurrentMovie} from '../../features/homepage/selectors';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => ({
  movie: getCurrentMovie(state)
});

MovieFullCard.propTypes = {
  movie: PropTypes.object
};

export default connect(
    mapStateToProps,
)(MovieFullCard);

