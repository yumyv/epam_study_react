import {MovieCard} from './component';
import {connect} from 'react-redux';
import {updateLikes} from '../../../../features/homepage/actions';
import {getLanguage} from '../../../../features/homepage/selectors';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => ({
  language: getLanguage(state)
});

const mapDispatchToProps = {
  updateLikes,
};

MovieCard.propTypes = {
  updateLikes: PropTypes.func.isRequired,
  movie: PropTypes.object,
  language: PropTypes.object
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieCard);
