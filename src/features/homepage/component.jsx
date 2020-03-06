import React from 'react';
import styles from './styles.module.scss';
import SortMovies from './components/SortMovies';
import FilterMovies from './components/FilterMovies';
import MovieCardList from '../../components/MovieCardList';

export class Homepage extends React.Component {
  componentDidMount() {
    const {actors, movies, fetchMovies, fetchActors} = this.props;
    if (!movies) fetchMovies();
    if (!actors ) fetchActors();
  }

  render() {
    return (
        <>
          <main className={styles.main}>
            <SortMovies/>
            <FilterMovies/>
            <MovieCardList/>
          </main>
        </>
    );
  }
}
