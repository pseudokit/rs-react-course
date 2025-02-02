import * as React from 'react';
import styles from './Results.module.scss';
import { ICharacter } from '../utils/types';
import CardList from '../CardList/CardList';
import Loader from '../Loader/Loader';
import ErrorPage from '../ErrorPage/ErrorPage';

interface ResultsProps {
  characters: Array<ICharacter>;
  isLoading: boolean;
  isError: boolean;
  updateFunc: (input: Array<ICharacter>) => void;
}

class Results extends React.Component<ResultsProps> {
  render(): React.ReactNode {
    return (
      <div className={styles.Results}>
        {this.props.isLoading ? (
          <Loader />
        ) : this.props.isError ? (
          <ErrorPage />
        ) : (
          <CardList cardList={this.props.characters} />
        )}
      </div>
    );
  }
}

export default Results;
