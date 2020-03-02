import React from 'react';
import styles from './styles.module.scss';
import {Navigation} from '../../components/Navigation';
import SortMovies from './components/SortMovies';
import FilterMovies from './components/FilterMovies';
import MovieCardList from '../../components/MovieCardList';
import MovieFullCard from '../../components/MovieFullCard';
import {Footer} from '../../components/Footer';

import {SignIn} from '../auth/SignIn';
import {SignUp} from '../auth/SignUp';

export class Homepage extends React.Component {
  render() {
    const {setBasicContentDispatch} = this.props;
    setBasicContentDispatch();

    return (
        <>
          <Navigation/>
          <main className={styles.main}>
            <section className={styles.moviesContainer}>
              <SortMovies/>
              <FilterMovies/>
              <MovieCardList/>

              <SignUp/>
              <SignIn/>

            </section>
            <aside className={styles.movieContainer}>
              <MovieFullCard/>
            </aside>
          </main>
          <Footer/>
        </>
    );
  }
}
