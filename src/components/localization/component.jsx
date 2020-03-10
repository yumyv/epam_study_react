import React from 'react';
import usaImg from '../../global/img/usa.png';
import uaImg from '../../global/img/ua.png';
import styles from './styles.module.scss';

export const Localization = (props) => {
  const onEN = () => {
    const {setLocalizationDispatch} = props;
    setLocalizationDispatch('en');
  };

  const onUA = () => {
    const {setLocalizationDispatch} = props;
    setLocalizationDispatch('ua');
  };

  return (
      <ul className={styles.list}>
        <li className={styles.item}>
          <img onClick={onEN} className={styles.img} src={usaImg} alt="usa"/>
        </li>
        <li className={styles.item}>
          <img onClick={onUA} className={styles.img} src={uaImg} alt="ua"/>
        </li>
      </ul>
  )
};
