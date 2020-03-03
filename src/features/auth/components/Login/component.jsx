import React from 'react';
import styles from '../../styles.module.scss';
import {Link} from 'react-router-dom';
import {Routes} from '../../../../global/constants';

export class Login extends React.Component {
  onLogin = (event) => {
    event.preventDefault();
    const {setLoggedInDispatch} = this.props;
    const user = {};
    user.name = this.name.value;
    user.password = this.password.value;
    setLoggedInDispatch(user);
    this.props.history.push(Routes.HOMEPAGE);
  };

  render() {
    const {users, setUsersDispatch} = this.props;
    if (users.length === 0) setUsersDispatch();

    return (
        <main className={styles.main}>
          <h3 className={styles.heading}>Please login</h3>
          <form>
            <label className={styles.label}>
              <input className={styles.input}
                     type="text"
                     placeholder='Enter your name'
                     ref={input => this.name = input}/>
            </label>
            <label className={styles.label}>
              <input className={styles.input}
                     type="password"
                     placeholder='Enter your password'
                     ref={input => this.password = input}/>
            </label>
            <div className={styles.btnContainer}>
              <button onClick={this.onLogin} className={styles.btn}>Login</button>
            </div>
          </form>
          <p className={styles.text}>
            Don't have an account? <Link className={styles.link} to={Routes.REGISTRATION}>Go to Register page</Link>
          </p>
        </main>
    )
  }
}
