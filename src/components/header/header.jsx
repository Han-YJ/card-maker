import React from 'react';
import styles from './header.module.css';

const Header = props => 
(
  <header className={styles.header}>
    <img className={styles.logo} src="/images/logo.png" alt="logo"/>
    <button className={styles.logout}>Logout</button>
    <span className={styles.title}>Card Maker</span>
  </header>
);


export default Header;