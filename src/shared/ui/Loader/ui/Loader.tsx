import { memo } from 'react';
import styles from './Loader.module.scss';

const Loader = memo(function Loader() {
  return (
    <div className={styles.spinner}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
});

export default Loader;
