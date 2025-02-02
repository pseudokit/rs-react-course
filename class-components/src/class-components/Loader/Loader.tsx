import * as React from 'react';
import styles from './Loader.module.scss';

class Loader extends React.Component {
  render(): React.ReactNode {
    return <div className={styles.Loader}>is loading...</div>;
  }
}

export default Loader;
