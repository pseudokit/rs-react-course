import * as React from 'react';
import styles from './SearchInput.module.scss';

interface SearchInputProps {
  onChangeSearchQuery: (query: string) => void;
}
class SearchInput extends React.Component<SearchInputProps> {
  render(): React.ReactNode {
    return (
      <>
        {' '}
        <input
          type="text"
          className={styles.Search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            this.props.onChangeSearchQuery(e.target.value);
          }}
          placeholder="Поиск..."
        />
      </>
    );
  }
}

export default SearchInput;
