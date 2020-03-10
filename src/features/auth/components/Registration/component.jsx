import React from 'react';
import styles from '../../styles.module.scss';
import {Link} from 'react-router-dom';
import {Routes} from '../../../../global/constants';

export class Registration extends React.Component {
  onSubmit = (event) => {
    event.preventDefault();
    const {registerUser} = this.props;
    const user = {};
    user.name = this.name.value;
    user.password = this.password.value;
    registerUser(user);
  };

  render() {
    const {infoMessage, language} = this.props;

    return (
        <main className={styles.main}>
          <h3 className={styles.heading}>{language.app_auth_registration_heading}</h3>
          <form>
            <label className={styles.label}>
              <input className={styles.input}
                     type="text"
                     placeholder={language.app_auth_registration_input_name}
                     ref={input => this.name = input}/>
            </label>
            <label className={styles.label}>
              <input className={styles.input}
                     type="password"
                     placeholder={language.app_auth_registration_input_password}
                     ref={input => this.password = input}/>
            </label>
            <div className={styles.btnContainer}>
              <button onClick={this.onSubmit} className={styles.btn}>{language.app_auth_registration_btn}</button>
            </div>
          </form>
          {infoMessage?<p className={`${styles.infoText} ${styles.text}`}>{infoMessage}</p>:''}
          <p className={styles.text}>
            {language.app_auth_registration_text} <Link className={styles.link} to={Routes.LOGIN}>{language.app_auth_registration_link}</Link>
          </p>
        </main>
    )
  }
}
