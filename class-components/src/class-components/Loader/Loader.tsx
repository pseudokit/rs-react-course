import * as React from 'react';
import styles from './Loader.module.scss';

class Loader extends React.Component {
  render(): React.ReactNode {
    return (
      <div className={styles.Loader__container}>
        <div className={styles.Loader}></div>
      </div>
    );
  }
}

export default Loader;
