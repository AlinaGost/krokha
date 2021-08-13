import * as React from 'react';
import styles from './styles.module.scss';
import logo from './../../assets/img/logo.png';
import basket from './../../assets/img/basket.svg';


function Navigation() {
  return(
    <div className={styles.navigation}>
      <div className="container">
        <div className={styles.links}>
          <a className={styles.link} href='#'>Одежда</a>
          <a className={styles.link} href='#'>Обувь</a>
          <a className={styles.link} href='#'>Аксессуары</a>
          <a className={styles.link} href='#'>Скидки</a>
        </div>
      </div>
    </div>
  )
}

export default Navigation;
