import React from 'react';
import styles from './styles.module.scss';
import LikeImg from '../../../../global/img/like.png';
import RatingStars from '../../../RatingStars';
import {Link} from 'react-router-dom';
import {Routes} from '../../../../global/constants';

export class MovieCard extends React.Component {
  addLike = () => {
    const {movie, changeCountOfLikesDispatch} = this.props;
    changeCountOfLikesDispatch({id: movie.id, event: 'plus'});
  };

  subtractLike = () => {
    const {movie, changeCountOfLikesDispatch} = this.props;
    changeCountOfLikesDispatch({id: movie.id, event: 'minus'});
  };

  render() {
    const {movie} = this.props;

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
              <Link className={styles.link} to={`${Routes.MOVIES}/${movie.id}`}>
                <h3 className={styles.heading}>{movie.title}</h3>
              </Link>
              <img className={styles.img} src={movie.posterUrl} alt={movie.title}/>
            </div>
          </div>
          <div className={styles.stars}>
            <RatingStars movie={movie}/>
          </div>
        </article>
    );
  }
}
