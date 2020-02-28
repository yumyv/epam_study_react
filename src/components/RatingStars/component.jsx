import React from 'react';
import styles from './styles.module.scss';
import FullStarImg from '../../global/img/fullStar.png';
import EmptyStarImg from '../../global/img/emptyStar.png';

export class RatingStars extends React.Component {
  changeCountOfStars = ({target}) => {
    const {movie, changeCountOfStarsDispatch} = this.props;
    changeCountOfStarsDispatch({movie, countOfStars: target.getAttribute('data-index')});
  };

  render() {
    const MAXIMUM_STARS = 5;
    const {movie} = this.props;
    const countOfStars = movie.stars;

    return (
        <>
          {
            [...Array(MAXIMUM_STARS)].map((elem, i) => {
                  return i < countOfStars ?
                      <img onClick={this.changeCountOfStars} className={styles.starImg} src={FullStarImg} alt="full star"
                           data-index={i + 1} key={i}/> :
                      <img onClick={this.changeCountOfStars} className={styles.starImg} src={EmptyStarImg} alt="empty star"
                           data-index={i + 1} key={i}/>
                }
            )
          }
        </>
    );
  }
}
