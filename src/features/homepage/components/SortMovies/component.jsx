import React from 'react';
import styles from './styles.module.scss';

export class SortMovies extends React.Component {

  render() {
    const {sortByLikes, sortByRating} = this.props;

    return (
        <>
          <h3 className={styles.heading}>Sort movies</h3>
          <div className={styles.btnContainer}>
            <button onClick={sortByLikes} className={styles.btn}>By likes</button>
            <button onClick={sortByRating} className={styles.btn}>By rating</button>
          </div>
        </>
    );
  }
}
