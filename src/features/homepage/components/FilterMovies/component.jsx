import React from 'react';
import styles from './styles.module.scss';
import SearchImg from '../../../../global/img/search.png';

export const FilterMovies = (props) => {
  let filterWord = '';

  const onFilterWordChange = ({target}) => {
    filterWord = target.value;
  };

  const onFilterClick = () => {
    const {filterMoviesDispatch} = props;
    filterMoviesDispatch(filterWord);
  };

  const {language} = props;

  return (
      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <input onChange={onFilterWordChange} className={styles.input} type="text" placeholder={language.app_homepage_filterMovies_search}/>
          <img onClick={onFilterClick} className={styles.searchImg} src={SearchImg} alt="search"/>
        </div>
      </div>
  );
};
