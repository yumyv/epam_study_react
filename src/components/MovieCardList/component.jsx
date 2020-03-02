import React from 'react';
import styles from './styles.module.scss';
import MovieCard from './components/MovieCard';

export const MovieCardList = (props) => {
  const {filteredMovies} = props;

  return (
      <section className={styles.container}>
        {filteredMovies.map(movie =>
            <MovieCard
                movie={movie}
                key={movie.id}
            />)}
      </section>
  );
};
