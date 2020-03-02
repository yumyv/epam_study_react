import React from 'react';
import styles from './styles.module.scss';
import LikeImg from '../../../../global/img/like.png';
import {RatingStars} from '../../../RatingStars';

export class MovieCard extends React.Component {
  addCurrentMovie = () => {
    const {movie, addCurrentMovie} = this.props;
    addCurrentMovie(movie);
  };

  addLike = () => {
    const {movie, changeCountOfLikes} = this.props;
    changeCountOfLikes(movie, 'plus');
  };

  subtractLike = () => {
    const {movie, changeCountOfLikes} = this.props;
    changeCountOfLikes(movie, 'minus');
  };

  render() {
    const {movie, changeCountOfStars} = this.props;

    return (
        <article className={styles.movieCard}>
          <div className={styles.container}>
            <div className={styles.likes}>
              <div className={styles.likesContainer}>
                <img onClick={this.addLike} className={styles.likeImg} src={LikeImg} alt="like up"/>
                <img onClick={this.subtractLike} className={`${styles.likeImg} ${styles.likeImgDown}`} src={LikeImg}
                     alt="like down"/>
                <p className={styles.text}>likes</p>
              </div>
              <div className={styles.counter}>
                <p className={styles.text}>{movie.likes}</p>
              </div>
            </div>
            <div className={styles.pic}>
              <h3 onClick={this.addCurrentMovie} className={styles.heading}>{movie.title}</h3>
              <img className={styles.img} src={movie.posterUrl} alt={movie.title}/>
            </div>
          </div>
          <div className={styles.stars}>
            <RatingStars countOfStars={movie.stars} movie={movie} changeCountOfStars={changeCountOfStars}/>
          </div>
        </article>
    );
  }
}
