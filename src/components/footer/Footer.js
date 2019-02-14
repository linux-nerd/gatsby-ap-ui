import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyrightSection}>
        <div className={styles.copytext}>&copy; 2018 abhishekprakash.com</div>
      </div>
    </footer>
  )
};

export default Footer;