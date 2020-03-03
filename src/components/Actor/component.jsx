import React from 'react';
import {getObjByIdFromArr} from '../../utils/helpers';
import styles from './styles.module.scss';

export class Actor extends React.Component {
  getActor() {
    const {actors} = this.props;
    const id = this.props.match.params.id;
    return getObjByIdFromArr(actors, id);
  }

  render() {
    const actor = this.getActor();

    return (
        <article className={styles.actor}>
          <img className={styles.img} src={actor.imgUrl} alt={actor.name}/>
          <h1 className={styles.heading}>Name: {actor.name}</h1>
          <p className={styles.text}>Biography: {actor.biography}</p>
        </article>
    )
  }
}
