import React from 'react';
import styles from './styles.module.scss';
import {MovieCard} from './components/MovieCard';

export const MovieCardList = (props) => {
  const {movies, addCurrentMovie, changeCountOfLikes, changeCountOfStars} = props;

  return (
      <section className={styles.container}>
        {movies.map(movie =>
            <MovieCard
                movie={movie}
                addCurrentMovie={addCurrentMovie}
                changeCountOfLikes={changeCountOfLikes}
                changeCountOfStars={changeCountOfStars}
                key={movie.id}
            />)}
      </section>
  );
};
