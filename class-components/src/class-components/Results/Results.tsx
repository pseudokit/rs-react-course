import * as React from 'react';
import styles from './Results.module.scss';
import { ICharacter } from '../utils/types';
import CardList from '../CardList/CardList';
import Loader from '../Loader/Loader';

interface ResultsProps {
  characters: Array<ICharacter>;
  isLoading: boolean;
  updateFunc: (input: Array<ICharacter>) => void;
}

class Results extends React.Component<ResultsProps> {
  render(): React.ReactNode {
    return (
      <div>
        {this.props.isLoading ? (
          <Loader />
        ) : (
          <CardList cardList={this.props.characters} />
        )}
      </div>
    );
  }

  clickMe = () => {
    this.props.updateFunc(this.props.characters);
  };
}

export default Results;
