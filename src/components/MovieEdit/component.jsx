import React from 'react';
import {getObjByKeyFromArr} from '../../utils/helpers';
import {Routes} from '../../global/constants';
import styles from './styles.module.scss';
import {Form, Field} from 'react-final-form';

export class MovieEdit extends React.Component {
  getMovie() {
    const {movies} = this.props;
    const id = parseInt(this.props.match.params.id);
    return getObjByKeyFromArr(movies, 'id', id);
  }

  onSubmit = (values) => {
    const {title, posterUrl, director, genres, description} = values;
    const {editMovie} = this.props;
    const movie = {...this.getMovie()};
    movie.title = title;
    movie.posterUrl = posterUrl;
    movie.director = director;
    movie.genres = genres.split(', ');
    movie.description = description;
    this.props.history.push(Routes.HOMEPAGE);
    editMovie(movie);
  };

  onGoBack = (event) => {
    event.preventDefault();
    this.props.history.goBack();
  };

  render() {
    const {language} = this.props;
    const movie = this.getMovie();

    return (
        <Form
              onSubmit={this.onSubmit}
              render={({handleSubmit}) => (
                  <form className={styles.form} onSubmit={handleSubmit}>
                    <label className={styles.label}>{language.app_movieEdit_title}:
                      <Field className={styles.input}
                             name='title'
                             component='input'
                             type="text"
                             defaultValue={movie.title}
                      />
                    </label>
                    <label className={styles.label}>{language.app_movieEdit_imgUrl}:
                      <Field className={styles.input}
                             name='posterUrl'
                             component='input'
                             type="url"
                             defaultValue={movie.posterUrl}
                      />
                    </label>
                    <label className={styles.label}>{language.app_movieEdit_director}:
                      <Field className={styles.input}
                             name='director'
                             component='input'
                             type="text"
                             defaultValue={movie.director}
                      />
                    </label>
                    <label className={styles.label}>{language.app_movieEdit_genres}:
                      <Field className={styles.input}
                             name='genres'
                             component='input'
                             type="text"
                             defaultValue={movie.genres.join(', ')}
                      />
                    </label>
                    <label className={styles.label}>{language.app_movieEdit_description}:
                      <Field className={styles.textarea}
                             name='description'
                             component='textarea'
                             defaultValue={movie.description}
                      />
                    </label>
                    <div className={styles.btnContainer}>
                      <button className={styles.btn} type='submit'>{language.app_movieEdit_btn_submit}</button>
                      <button className={styles.btn} onClick={this.onGoBack}>{language.app_movieEdit_btn_back}</button>
                    </div>
                  </form>
              )}
        />
    )
  }
}
