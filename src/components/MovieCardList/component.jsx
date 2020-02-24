import React from 'react';
import styles from './styles.module.scss';
import {MovieCard} from './components/MovieCard';

export class MovieCardList extends React.Component {
  render() {
    const {movies, addCurrentMovie, changeCountOfLikes, changeCountOfStars} = this.props;

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
  }
}
