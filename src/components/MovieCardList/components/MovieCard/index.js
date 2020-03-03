import {MovieCard} from './component';
import {connect} from 'react-redux';
import {changeCountOfLikes} from '../../../../features/homepage/actions';
import PropTypes from 'prop-types';

const mapDispatchToProps = {
  changeCountOfLikesDispatch: changeCountOfLikes,
};

MovieCard.propTypes = {
  changeCountOfLikesDispatch: PropTypes.func.isRequired,
  movie: PropTypes.object
};

export default connect(
    null,
    mapDispatchToProps
)(MovieCard);
