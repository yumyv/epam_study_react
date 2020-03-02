import React from 'react';
import styles from './styles.module.scss';
import MovieCard from './components/MovieCard';

export const MovieCardList = (props) => {
  const {movies, filterWord} = props;
  let moviesForRender = filterWord ? movies.filter((movie) => movie.title.toLowerCase() === filterWord.toLowerCase()) : movies;

  return (
      <section className={styles.container}>
        {moviesForRender.map(movie =>
            <MovieCard
                movie={movie}
                key={movie.id}
            />)}
      </section>
  );
};
