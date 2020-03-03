import React from 'react';
import styles from './styles.module.scss';
import RatingStars from '../RatingStars';
import {getObjByIdFromArr} from '../../utils/helpers';
import {Actor} from './components/Actor';
import {Routes} from '../../global/constants';

export class MovieFullCard extends React.Component {
  onDeleteMovie = () => {
    const {deleteMovieDispatch} = this.props;
    const id = this.getMovie().id;
    this.props.history.push(Routes.HOMEPAGE);
    deleteMovieDispatch(id);
  };

  onEditMovie = () => {
    const id = this.getMovie().id;
    this.props.history.push(`${Routes.EDIT}/${id}`);
  };

  getActors() {
    const movie = this.getMovie();
    const {actors} = this.props;
    const result = [];
    actors.forEach(actor => {
      movie.actorsIds.forEach(id => {
        if (id === actor.id) result.push(actor);
      });
    });
    return result;
  }

  getMovie() {
    const {movies} = this.props;
    const id = this.props.match.params.id;
    return getObjByIdFromArr(movies, id);
  }

  render() {
    const movie = this.getMovie();
    const actors = this.getActors();

    return (
        <main className={styles.main}>
          <article className={styles.fullCard}>
            <div className={styles.info}>
              <div className={styles.container}>
                <h2 className={styles.heading}>{movie.title}</h2>
                <p className={styles.text}>Likes: {movie.likes}</p>
              </div>
              <div className={styles.stars}>
                <RatingStars movie={movie}/>
              </div>
              <div className={styles.btnContainer}>
                <button onClick={this.onEditMovie} className={styles.btn}>Edit</button>
                <button onClick={this.onDeleteMovie} className={styles.btn}>Delete</button>
              </div>
            </div>
            <div className={styles.content}>
              <img className={styles.img} src={movie.posterUrl} alt={movie.title}/>
              <p className={styles.text}>
                <strong className={styles.strongText}>Director: </strong>{movie.director}
              </p>
              <p className={styles.text}>
                <strong className={styles.strongText}>Actors: </strong>{actors.map(actor =>
                  <Actor actor={actor} key={actor.id}/>
                  )}
              </p>
              <p className={styles.text}>
                <strong className={styles.strongText}>Genres: </strong>{movie.genres.join(', ')}
              </p>
              <p className={styles.text}>
                <strong className={styles.strongText}>Description: </strong>{movie.description}
              </p>
            </div>
          </article>
        </main>
    );
  }
}
