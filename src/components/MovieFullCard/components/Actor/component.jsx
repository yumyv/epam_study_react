import React from 'react';
import {Routes} from '../../../../global/constants';
import {Link} from 'react-router-dom';
import styles from './styles.module.scss';

export const Actor = (props) => {
  const {actor} = props;

  return (<Link className={styles.link} to={`${Routes.ACTORS}/${actor.id}`}>{actor.name} </Link>)
};
