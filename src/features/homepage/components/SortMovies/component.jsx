import React from 'react';
import styles from './styles.module.scss';

export class SortMovies extends React.Component {

  render() {
    const {sortByLikesDispatch, sortByRatingDispatch} = this.props;

    return (
        <>
          <h3 className={styles.heading}>Sort movies</h3>
          <div className={styles.btnContainer}>
            <button onClick={sortByLikesDispatch} className={styles.btn}>By likes</button>
            <button onClick={sortByRatingDispatch} className={styles.btn}>By rating</button>
          </div>
        </>
    );
  }
}
