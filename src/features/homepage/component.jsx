import React from 'react';
import styles from './styles.module.scss';
import SortMovies from './components/SortMovies';
import FilterMovies from './components/FilterMovies';
import MovieCardList from '../../components/MovieCardList';

export const Homepage = (props) => {
    const {setBasicContentDispatch, movies} = props;
    if (!movies) setBasicContentDispatch();

    return (
        <>
          <main className={styles.main}>
            <SortMovies/>
            <FilterMovies/>
            <MovieCardList/>
          </main>
        </>
    );
};
