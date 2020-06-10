import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './styles.module.scss';
import {Routes} from '../../global/constants';
import Localization from '../localization';

export const Navigation = (props) => {
  const {setLoggedOutDispatch, isLoggedIn, language} = props;
  const onLogout = () => {
    props.history.push(Routes.LOGIN);
    setLoggedOutDispatch();
  };

  const logout = () => {
    if (isLoggedIn) return <button onClick={onLogout} className={styles.btn}>Logout</button>;
  };

  const activeLinkColor = {color: '#19b5fe'};

  return (
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink to={Routes.HOMEPAGE} className={styles.link} activeStyle={activeLinkColor}>{language.app_navigation_home}</NavLink>
          </li>
          <Localization/>
          {logout()}
        </ul>
      </nav>
  );
};
