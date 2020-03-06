import React from 'react';
import {getObjByKeyFromArr} from '../../utils/helpers';
import {Routes} from '../../global/constants';
import styles from './styles.module.scss';

export class MovieEdit extends React.Component {
  getMovie() {
    const {movies} = this.props;
    const id = parseInt(this.props.match.params.id);
    return getObjByKeyFromArr(movies, 'id', id);
  }

  onSubmit = (event) => {
    event.preventDefault();
    const {editMovie} = this.props;
    const movie = {...this.getMovie()};
    movie.title = this.title.value;
    movie.posterUrl = this.posterUrl.value;
    movie.director = this.director.value;
    movie.genres = this.genres.value.split(', ');
    movie.description = this.description.value;
    this.props.history.push(Routes.HOMEPAGE);
    editMovie(movie);
  };

  onGoBack = (event) => {
    event.preventDefault();
    this.props.history.goBack();
  };

  render() {
    const movie = this.getMovie();

    return (
        <form className={styles.form}>
          <label className={styles.label}>Title:
            <input className={styles.input}
                   type="text"
                   defaultValue={movie.title}
                   ref={input => this.title = input}/>
          </label>
          <label className={styles.label}>
            Img url:
            <input className={styles.input}
                   type="url"
                   defaultValue={movie.posterUrl}
                   ref={input => this.posterUrl = input}/>
          </label>
          <label className={styles.label}>Director:
            <input className={styles.input}
                   type="text"
                   defaultValue={movie.director}
                   ref={input => this.director = input}/>
          </label>
          <label className={styles.label}>Genres:
            <input className={styles.input}
                   type="text"
                   defaultValue={movie.genres.join(', ')}
                   ref={input => this.genres = input}/>
          </label>
          <label className={styles.label}>Description:
            <textarea className={styles.textarea}
                defaultValue={movie.description}
                ref={input => this.description = input}/>
          </label>
          <div className={styles.btnContainer}>
            <button className={styles.btn} onClick={this.onSubmit}>Submit</button>
            <button className={styles.btn} onClick={this.onGoBack}>Go back</button>
          </div>
        </form>
    )
  }
}
