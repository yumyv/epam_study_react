import React from 'react';
import styles from './styles.module.scss';
import RatingStars from '../RatingStars';
import {getObjByKeyFromArr} from '../../utils/helpers';
import {Actor} from './components/Actor';
import {Routes} from '../../global/constants';

export const MovieFullCard = (props) => {
  const {removeMovie, actors, movies, language} = props;

  const onDeleteMovie = () => {
    const id = getMovie().id;
    props.history.push(Routes.HOMEPAGE);
    removeMovie(id);
  };

  const onEditMovie = () => {
    const id = getMovie().id;
    props.history.push(`${Routes.EDIT}/${id}`);
  };

  const getActors = () => {
    const movie = getMovie();
    const result = [];
    actors.forEach(actor => {
      movie.actorsIds.forEach(id => {
        if (id === actor.id) result.push(actor);
      });
    });
    return result;
  };

  const getMovie = () => {
    const id = parseInt(props.match.params.id);
    return getObjByKeyFromArr(movies, 'id', id);
  };

  return (
      <main className={styles.main}>
        <article className={styles.fullCard}>
          <div className={styles.info}>
            <div className={styles.container}>
              <h2 className={styles.heading}>{getMovie().title}</h2>
              <p className={styles.text}>{language.app_movieFullCard_likes}: {getMovie().likes}</p>
            </div>
            <div className={styles.stars}>
              <RatingStars movie={getMovie()}/>
            </div>
            <div className={styles.btnContainer}>
              <button onClick={onEditMovie} className={styles.btn}>{language.app_movieFullCard_btn_edit}</button>
              <button onClick={onDeleteMovie} className={styles.btn}>{language.app_movieFullCard_btn_delete}</button>
            </div>
          </div>
          <div className={styles.content}>
            <img className={styles.img} src={getMovie().posterUrl} alt={getMovie().title}/>
            <p className={styles.text}>
              <strong className={styles.strongText}>{language.app_movieFullCard_director}: </strong>{getMovie().director}
            </p>
            <p className={styles.text}>
              <strong className={styles.strongText}>{language.app_movieFullCard_actors}: </strong>{getActors().map(actor =>
                <Actor actor={actor} key={actor.id}/>
            )}
            </p>
            <p className={styles.text}>
              <strong className={styles.strongText}>{language.app_movieFullCard_genres}: </strong>{getMovie().genres.join(', ')}
            </p>
            <p className={styles.text}>
              <strong className={styles.strongText}>{language.app_movieFullCard_description}: </strong>{getMovie().description}
            </p>
          </div>
        </article>
      </main>
  );
};
