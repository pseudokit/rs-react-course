import * as React from 'react';
import styles from './SearchBtn.module.scss';
import { ICharacter } from '../utils/types';

interface SearchBtnProps {
  characters: Array<ICharacter>;
  updateFunc: (input: Array<ICharacter>) => void;
  updateLoading: () => void;
  searchQuery: string;
  setErrorPage: (isError: boolean) => void;
  apiCall: () => void;
}

class SearchBtn extends React.Component<SearchBtnProps> {
  render(): React.ReactNode {
    return (
      <>
        <button className={styles.SearchBtn} onClick={this.props.apiCall}>
          Поиск . . .
        </button>
      </>
    );
  }
}

export default SearchBtn;
