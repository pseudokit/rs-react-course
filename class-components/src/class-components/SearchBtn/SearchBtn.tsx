import * as React from 'react';
import styles from './SearchBtn.module.scss';
import { getWithAxiosCharacters } from '../utils/api';
import { ICharacter } from '../utils/types';

interface SearchBtnProps {
  characters: number;
  updateFunc: (input: Array<ICharacter>) => void;
  updateLoading: () => void;
  searchQuery: string;
}

class SearchBtn extends React.Component<SearchBtnProps> {
  render(): React.ReactNode {
    return (
      <>
        <button className={styles.SearchBtn} onClick={this.apiCall}>
          Поиск . . .
        </button>
      </>
    );
  }

  apiCall = async () => {
    this.props.updateLoading();
    const dataJson = await getWithAxiosCharacters(this.props.searchQuery);
    this.props.updateLoading();
    this.props.updateFunc(dataJson);
  };
}

export default SearchBtn;
