import React from 'react';
import {getObjByKeyFromArr} from '../../utils/helpers';
import styles from './styles.module.scss';

export const Actor = (props) => {
  const {actors, language} = props;

  const getActor = () => {
    const id = parseInt(props.match.params.id);
    return getObjByKeyFromArr(actors, 'id', id);
  };

  return (
      <article className={styles.actor}>
        <img className={styles.img} src={getActor().imgUrl} alt={getActor.name}/>
        <h1 className={styles.heading}>{language.app_actor_heading} {getActor().name}</h1>
        <p className={styles.text}>{language.app_actor_text} {getActor().biography}</p>
      </article>
  )
};
