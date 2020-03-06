import React from 'react';
import styles from '../../styles.module.scss';
import {Link} from 'react-router-dom';
import {Routes} from '../../../../global/constants';

export class Login extends React.Component {
  componentDidMount() {
    const {isLoggedIn} = this.props;
    if (isLoggedIn) this.props.history.push(Routes.HOMEPAGE);
  }

  onLogin = (event) => {
    event.preventDefault();
    const {loginUser} = this.props;
    const user = {};
    user.name = this.name.value;
    user.password = this.password.value;
    loginUser(user);
  };

  render() {
    const {infoMessage, isLoggedIn} = this.props;
    if (isLoggedIn) this.props.history.push(Routes.HOMEPAGE);

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
          {infoMessage?<p className={`${styles.infoText} ${styles.text}`}>{infoMessage}</p>:''}
          <p className={styles.text}>
            Don't have an account? <Link className={styles.link} to={Routes.REGISTRATION}>Go to Register page</Link>
          </p>
        </main>
    )
  }
}
