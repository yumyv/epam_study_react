import React from 'react';
import styles from './styles.module.scss';

export const Navigation = () => {
  return (
      <nav className={styles.nav}>
        <ul>
          <li className={styles.item}>
            <a className={styles.link} href="/">Home</a>
          </li>
        </ul>
      </nav>
  );
};
