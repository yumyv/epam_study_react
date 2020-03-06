import React from 'react';
import {getObjByKeyFromArr} from '../../utils/helpers';
import styles from './styles.module.scss';

export class Actor extends React.Component {
  getActor() {
    const {actors} = this.props;
    const id = parseInt(this.props.match.params.id);
    return getObjByKeyFromArr(actors, 'id', id);
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
