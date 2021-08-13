import * as React from 'react';
import styles from './styles.module.scss';
import logo from './../../assets/img/logo.png';
import basket from './../../assets/img/basket.svg';


function Header() {
  return(
    <div className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.links}>
            <a className={styles.link} href="#">Оплата и доставка</a>
            <a className={styles.link} href="#">Отзывы</a>
          </div>
          <a href="#">
            <img className={styles.logo} src={logo} alt=""/>
          </a>
          <a className={styles.basket} href="#">
            <img className={styles.basket} src={basket} alt=""/>
          </a>
        </div>

      </div>
    </div>
  )
}

export default Header;
