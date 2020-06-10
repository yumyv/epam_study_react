import React from 'react';
import styles from './styles.module.scss';
import FullStarImg from '../../global/img/fullStar.png';
import EmptyStarImg from '../../global/img/emptyStar.png';

export const RatingStars = (props) => {
  const changeCountOfStars = ({target}) => {
    const {movie, updateStars} = props;
    updateStars({movie: movie, countOfStars: target.getAttribute('data-index')});
  };

  const MAXIMUM_STARS = 5;
  const {movie} = props;
  const countOfStars = movie.stars;

  return (
      <>
        {
          [...Array(MAXIMUM_STARS)].map((elem, i) => {
                return i < countOfStars ?
                    <img onClick={changeCountOfStars} className={styles.starImg} src={FullStarImg} alt="full star"
                         data-index={i + 1} key={i}/> :
                    <img onClick={changeCountOfStars} className={styles.starImg} src={EmptyStarImg} alt="empty star"
                         data-index={i + 1} key={i}/>
              }
          )
        }
      </>
  );
};
