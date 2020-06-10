import React from 'react';
import styles from './styles.module.scss';

export const Footer = (props) => {
  const {language} = props;

  return (
      <footer className={styles.footer}>
        <p className={styles.text}>&copy; {language.app_footer_text}, {new Date().getFullYear()}</p>
      </footer>
  );
};
