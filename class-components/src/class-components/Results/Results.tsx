import * as React from 'react';
import styles from './Results.module.scss';
import { AppCharacterState, ICharacter } from '../utils/types';
import CardList from '../CardList/CardList';

interface ResultsProps {
  characters: Array<ICharacter>;
  updateFunc: (input: Array<ICharacter>) => void;
}

class Results extends React.Component<ResultsProps> {
  render(): React.ReactNode {
    return (
      <div className={styles.Results}>
        <CardList cardList={this.props.characters} />
        <button onClick={this.clickMe}>
          Clicke me {this.props.mess} {this.props.characters.length}
        </button>
      </div>
    );
  }

  clickMe = () => {
    this.props.updateFunc(this.props.characters);
  };
}

export default Results;
