import * as React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import SearchBtn from '../SearchBtn/SearchBtn';
import styles from './Header.module.scss';
import { ICharacter } from '../utils/types';

interface HeaderProps {
  characters: number;
  updateFunc: (input: Array<ICharacter>) => void;
}
class Header extends React.Component<HeaderProps> {
  render(): React.ReactNode {
    return (
      <div className={styles.Header}>
        <SearchInput />
        <SearchBtn
          characters={this.props.characters}
          updateFunc={this.props.updateFunc}
        />
      </div>
    );
  }
}

export default Header;
