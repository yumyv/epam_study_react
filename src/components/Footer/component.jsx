import React from 'react';
import styles from './styles.module.scss';

export class Footer extends React.Component {
  render() {
    return (
        <footer className={styles.footer}>
          <p className={styles.text}>&copy; Movies, {new Date().getFullYear()}</p>
        </footer>
    );
  }
}
