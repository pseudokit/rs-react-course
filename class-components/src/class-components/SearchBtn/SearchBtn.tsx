import * as React from 'react';
import styles from './SearchBtn.module.scss';

class SearchBtn extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <button className={styles.SearchBtn} onClick={this.apiCall}>
          Поиск
        </button>
      </>
    );
  }
  apiCall = () => {
    console.log('api called');
  };
}

export default SearchBtn;
