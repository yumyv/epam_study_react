import React from 'react';
import styles from './styles.module.scss';
import {Navigation} from '../../components/Navigation';
import {SortMovies} from './components/SortMovies';
import {FilterMovies} from './components/FilterMovies';
import {MovieCardList} from '../../components/MovieCardList';
import {MovieFullCard} from '../../components/MovieFullCard';
import {Footer} from '../../components/Footer';
import basicContent from '../../global/basicContent';

export class Homepage extends React.Component {
  state = {
    movies: [],
    currentMovie: {},
    sortedByLikesSwitcher: false,
    sortedByRatingSwitcher: false,
    filterWord: '',
    filteredMovies: [],
  };

  getBasicMovies() {
    return basicContent.movies;
  }

  addBasicMovies() {
    this.setState({
      movies: this.getBasicMovies(),
      filteredMovies: this.getBasicMovies(),
    });
  }

  componentDidMount() {
    this.addBasicMovies();
  }

  addCurrentMovie = (movie) => {
    this.setState({currentMovie: movie});
  };

  changeCountOfLikes = (movie, event) => {
    if (event.toLowerCase() === 'plus') {
      this.setState(state => {
        const movieFromState = state.movies.find(elem => elem.id === movie.id);
        movieFromState.likes += 1;
        return state;
      });
    } else if (event.toLowerCase() === 'minus') {
      this.setState(state => {
        const movieFromState = state.movies.find(elem => elem.id === movie.id);
        movieFromState.likes -= 1;
        return state;
      });
    }
  };

  changeCountOfStars = (movie, value) => {
    this.setState(state => {
      const movieFromState = state.movies.find(elem => elem.id === movie.id);
      movieFromState.stars = value;
      return state;
    });
  };

  sortByLikes = () => {
    this.setState(state => {
      if (state.sortedByLikesSwitcher) {
        state.filteredMovies.sort((a, b) => a.likes > b.likes ? 1 : -1);
        state.sortedByLikesSwitcher = !state.sortedByLikesSwitcher;
        return state;
      } else {
        state.filteredMovies.sort((a, b) => a.likes > b.likes ? -1 : 1);
        state.sortedByLikesSwitcher = !state.sortedByLikesSwitcher;
        return state;
      }
    });
  };

  sortByRating = () => {
    this.setState(state => {
      if (state.sortedByRatingSwitcher) {
        state.filteredMovies.sort((a, b) => a.stars > b.stars ? 1 : -1);
        state.sortedByRatingSwitcher = !state.sortedByRatingSwitcher;
        return state;
      } else {
        state.filteredMovies.sort((a, b) => a.stars > b.stars ? -1 : 1);
        state.sortedByRatingSwitcher = !state.sortedByRatingSwitcher;
        return state;
      }
    });
  };

  filterMovies = (filterWord) => {
    if (filterWord) {
      let filteredMovies = this.state.movies;
      filteredMovies = filteredMovies.filter((movie) => movie.title.toLowerCase() === filterWord.toLowerCase());
      this.setState({filteredMovies});
    } else {
      this.setState({filteredMovies: this.state.movies});
    }
  };

  render() {
    const {filteredMovies, currentMovie} = this.state;

    return (
        <>
          <Navigation/>
          <main className={styles.main}>
            <section className={styles.moviesContainer}>
              <SortMovies sortByLikes={this.sortByLikes} sortByRating={this.sortByRating}/>
              <FilterMovies filterMovies={this.filterMovies}/>
              <MovieCardList
                  movies={filteredMovies}
                  addCurrentMovie={this.addCurrentMovie}
                  changeCountOfLikes={this.changeCountOfLikes}
                  changeCountOfStars={this.changeCountOfStars}
              />
            </section>
            <aside className={styles.movieContainer}>
              <MovieFullCard movie={currentMovie} changeCountOfStars={this.changeCountOfStars}/>
            </aside>
          </main>
          <Footer/>
        </>
    );
  }
}
