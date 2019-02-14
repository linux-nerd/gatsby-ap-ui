import React from 'react';
import styles from './sectionwrapper.module.scss'

const SectionWrapper = ({ children }) => {
  return <section className={styles.root}>{children}</section>
};

export default SectionWrapper;