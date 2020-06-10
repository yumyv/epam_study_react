import React from 'react';
import styles from './styles.module.scss';

export const SortMovies = (props) => {
    const {sortByLikesDispatch, sortByRatingDispatch, language} = props;

    return (
        <>
          <h3 className={styles.heading}>{language.app_homepage_sortMovies_heading}</h3>
          <div className={styles.btnContainer}>
            <button onClick={sortByLikesDispatch} className={styles.btn}>{language.app_homepage_sortMovies_btn_likes}</button>
            <button onClick={sortByRatingDispatch} className={styles.btn}>{language.app_homepage_sortMovies_btn_rating}</button>
          </div>
        </>
    );
};
