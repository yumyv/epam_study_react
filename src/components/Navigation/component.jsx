import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './styles.module.scss';
import {Routes} from '../../global/constants';

export class Navigation extends React.Component {
  onLogout = () => {
    const {setLoggedOutDispatch} = this.props;
    this.props.history.push(Routes.LOGIN);
    setLoggedOutDispatch();
  };

  logout() {
    const {isLoggedIn} = this.props;
    if (isLoggedIn) return <button onClick={this.onLogout} className={styles.btn}>Logout</button>;
  }

  render() {
    const activeLinkColor = {color: '#19b5fe'};

    return (
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <NavLink to={Routes.HOMEPAGE} className={styles.link} activeStyle={activeLinkColor}>Home</NavLink>
            </li>
            {this.logout()}
          </ul>
        </nav>
    );
  }
}
