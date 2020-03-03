import React from 'react';
import styles from '../../styles.module.scss';
import {Link} from 'react-router-dom';
import {Routes} from '../../../../global/constants';

export class Registration extends React.Component {
  onSubmit = (event) => {
    event.preventDefault();
    const {addUserDispatch} = this.props;
    const user = {};
    user.name = this.name.value;
    user.password = this.password.value;
    addUserDispatch(user);
    this.props.history.push(Routes.LOGIN);
  };

  render() {
    return (
        <main className={styles.main}>
          <h3 className={styles.heading}>Please register</h3>
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
              <button onClick={this.onSubmit} className={styles.btn}>Register</button>
            </div>
          </form>
          <p className={styles.text}>
            Already have account? <Link className={styles.link} to={Routes.LOGIN}>Go to Login page</Link>
          </p>
        </main>
    )
  }
}
