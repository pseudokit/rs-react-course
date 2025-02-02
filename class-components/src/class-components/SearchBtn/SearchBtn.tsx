import * as React from 'react';
import styles from './SearchBtn.module.scss';
import { getCharacters, getWithAxiosCharacters } from '../utils/api';
import { ICharacter } from '../utils/types';

interface SearchBtnProps {
  characters: number;
  updateFunc: (input: Array<ICharacter>) => void;
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
    console.log('api called');
    const dataJson = await getWithAxiosCharacters('a');
    console.log(dataJson);
    this.props.updateFunc(dataJson);
  };
}

export default SearchBtn;
