import React from 'react';
import styles from './styles.module.scss';
import LikeImg from '../../../../global/img/like.png';
import FullStarImg from '../../../../global/img/fullStar.png';
import EmptyStarImg from '../../../../global/img/emptyStar.png';

export class MovieCard extends React.Component {

  renderStars(countOfStars) {
    const MAXIMUM_STARS = 5;
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

  changeCountOfStars = (event) => {
    const {movie, changeCountOfStars} = this.props;
    changeCountOfStars(movie, event.target.getAttribute('data-index'));
  };

  render() {
    const {movie} = this.props;

    return (
        <article className={styles.movieCard} data-id={movie.id}>
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
            {this.renderStars(movie.stars)}
          </div>
        </article>
    );
  }
}
