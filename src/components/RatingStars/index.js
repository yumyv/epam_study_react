import {RatingStars} from './component';
import {connect} from 'react-redux';
import {updateStars} from '../../features/homepage/actions';
import PropTypes from 'prop-types';

const mapDispatchToProps = {
  updateStars
};

RatingStars.propTypes = {
  movie: PropTypes.object.isRequired,
  updateStars: PropTypes.func.isRequired
};

export default connect(
    null,
    mapDispatchToProps
)(RatingStars);
