import * as React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import SearchBtn from '../SearchBtn/SearchBtn';
import styles from './Header.module.scss';

class Header extends React.Component {
  render(): React.ReactNode {
    return (
      <div className={styles.Header}>
        <SearchInput />
        <SearchBtn />
      </div>
    );
  }
}

export default Header;
