import {RatingStars} from './component';
import {connect} from 'react-redux';
import {changeCountOfStars} from '../../features/homepage/actions';
import PropTypes from 'prop-types';

const mapDispatchToProps = {
  changeCountOfStarsDispatch: changeCountOfStars
};

RatingStars.propTypes = {
  movie: PropTypes.object.isRequired,
  changeCountOfStarsDispatch: PropTypes.func.isRequired
};

export default connect(
    null,
    mapDispatchToProps
)(RatingStars);
