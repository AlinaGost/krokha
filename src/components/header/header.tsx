import * as React from 'react';
import styles from './styles.module.scss';
import logo from './../../assets/img/logo.png';


function Header() {
  return(
    <div className={styles.header}>
      <div className="container">
        <img className={styles.logo} src={logo} alt=""/>
      </div>
    </div>
  )
}

export default Header;
