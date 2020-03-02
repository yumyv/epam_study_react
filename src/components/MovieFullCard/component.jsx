import React from 'react';
import styles from './styles.module.scss';
import RatingStars from '../RatingStars';

export const MovieFullCard = (props) => {
  const {movie} = props;

  if (movie === null) {
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
              <RatingStars movie={movie}/>
            </div>
          </div>
          <div className={styles.content}>
            <img className={styles.img} src={movie.posterUrl} alt={movie.title}/>
            <p className={styles.text}>
              <strong className={styles.strongText}>Director: </strong>{movie.director}
            </p>
            <p className={styles.text}>
              <strong className={styles.strongText}>Actors: </strong>{movie.actorsIds.join(', ')}
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
};
