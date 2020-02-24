import React from 'react';
import styles from './styles.module.scss';
import FullStarImg from '../../global/img/fullStar.png';
import EmptyStarImg from '../../global/img/emptyStar.png';

export class MovieFullCard extends React.Component {
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

  changeCountOfStars = (event) => {
    const {movie, changeCountOfStars} = this.props;
    changeCountOfStars(movie, event.target.getAttribute('data-index'));
  };

  render() {
    const {movie} = this.props;

    if (Object.keys(movie).length === 0) {
      return (
          <h2 className={styles.text}>No movie selected. Please select a movie.</h2>
      );
    } else {
      return (
          <article className={styles.fullCard}>
            <div className={styles.info}>
              <div className={styles.container}>
                <h2 className={styles.heading}>{movie.title}</h2>
                <p className={styles.text}>Likes: {movie.likes}</p>
              </div>
              <div className={styles.stars}>
                {this.renderStars(movie.stars)}
              </div>
            </div>
            <div className={styles.content}>
              <img className={styles.img} src={movie.posterUrl} alt={movie.title}/>
              <p className={styles.text}>
                <strong className={styles.strongText}>Director: </strong>{movie.director}
              </p>
              <p className={styles.text}>
                <strong className={styles.strongText}>Actors: </strong>{movie.actors.join(', ')}
              </p>
              <p className={styles.text}>
                <strong className={styles.strongText}>Genres: </strong>{movie.genres.join(', ')}
              </p>
              <p className={styles.text}>
                <strong className={styles.strongText}>Description: </strong>{movie.description}
              </p>
            </div>
          </article>
      );
    }
  }
}
