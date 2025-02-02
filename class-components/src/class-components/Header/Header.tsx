import * as React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import SearchBtn from '../SearchBtn/SearchBtn';
import styles from './Header.module.scss';
import { ICharacter } from '../utils/types';

interface HeaderProps {
  characters: number;
  updateFunc: (input: Array<ICharacter>) => void;
  updateLoading: () => void;
}
type HeaderState = {
  searchQuery: string;
};

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
    };
  }

  render(): React.ReactNode {
    return (
      <div className={styles.Header}>
        <SearchInput onChangeSearchQuery={this.onChangeSearchQuery} />
        <SearchBtn
          characters={this.props.characters}
          updateFunc={this.props.updateFunc}
          updateLoading={this.props.updateLoading}
          searchQuery={this.state.searchQuery}
        />
      </div>
    );
  }
  onChangeSearchQuery = (query: string) => {
    this.setState((state: HeaderState) => ({
      ...state,
      searchQuery: query,
    }));
    console.log(this.state.searchQuery);
  };
}

export default Header;
