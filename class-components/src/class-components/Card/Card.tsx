import * as React from 'react';
import styles from './Card.module.scss';
import { ICharacter } from '../utils/types';

interface CardProps {
  card: ICharacter;
}

class Card extends React.Component<CardProps> {
  render(): React.ReactNode {
    return (
      <>
        <div className={styles.Card}>
          Card!!! {this.props.card.name} {this.props.card._id}
        </div>
      </>
    );
  }
}

export default Card;
