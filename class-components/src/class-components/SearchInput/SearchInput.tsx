import * as React from 'react';
import styles from './SearchInput.module.scss';

class SearchInput extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        {' '}
        <input type="text" className={styles.Search} placeholder="Поиск..." />
      </>
    );
  }
}

export default SearchInput;
