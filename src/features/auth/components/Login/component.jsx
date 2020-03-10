import React from 'react';
import styles from '../../styles.module.scss';
import {Link} from 'react-router-dom';
import {Routes} from '../../../../global/constants';

export class Login extends React.Component {
  onLogin = (event) => {
    event.preventDefault();
    const {loginUser} = this.props;
    const user = {};
    user.name = this.name.value;
    user.password = this.password.value;
    loginUser(user);
  };

  render() {
    const {infoMessage, isLoggedIn, language} = this.props;
    if (isLoggedIn) this.props.history.push(Routes.HOMEPAGE);

    return (
        <main className={styles.main}>
          <h3 className={styles.heading}>{language.app_auth_login_heading}</h3>
          <form>
            <label className={styles.label}>
              <input className={styles.input}
                     type="text"
                     placeholder={language.app_auth_login_input_name}
                     ref={input => this.name = input}/>
            </label>
            <label className={styles.label}>
              <input className={styles.input}
                     type="password"
                     placeholder={language.app_auth_login_input_password}
                     ref={input => this.password = input}/>
            </label>
            <div className={styles.btnContainer}>
              <button onClick={this.onLogin} className={styles.btn}>{language.app_auth_login_btn}</button>
            </div>
          </form>
          {infoMessage?<p className={`${styles.infoText} ${styles.text}`}>{infoMessage}</p>:''}
          <p className={styles.text}>
            {language.app_auth_login_text} <Link className={styles.link} to={Routes.REGISTRATION}>{language.app_auth_login_link}</Link>
          </p>
        </main>
    )
  }
}
