import * as React from 'react';
import styles from './SearchInput.module.scss';

interface SearchInputProps {
  onChangeSearchQuery: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
}
class SearchInput extends React.Component<SearchInputProps> {
  render(): React.ReactNode {
    return (
      <>
        {' '}
        <input
          type="text"
          className={styles.Search}
          onChange={this.props.onChangeSearchQuery}
          value={this.props.searchValue}
          placeholder="Поиск..."
        />
      </>
    );
  }

  /*setSearchInput = (input: string) => {
    this.setState((state) => ({
      ...state,
      searchQuery: input,
    }));
    localStorage.setItem('search', input);
  };*/
}

export default SearchInput;
