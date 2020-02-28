import React from 'react';
import styles from './styles.module.scss';
import SearchImg from '../../../../global/img/search.png';

export class FilterMovies extends React.Component {
  filterWord = '';

  onFilterWordChange = ({target}) => {
    this.filterWord = target.value;
  };

  onFilterClick = () => {
    const {filterMoviesDispatch} = this.props;
    filterMoviesDispatch(this.filterWord);
  };

  render() {
    return (
        <div className={styles.inputContainer}>
          <div className={styles.inputWrapper}>
            <input onChange={this.onFilterWordChange} className={styles.input} type="text" placeholder="Search by name"/>
            <img onClick={this.onFilterClick} className={styles.searchImg} src={SearchImg} alt="search"/>
          </div>
        </div>
    );
  }
}
