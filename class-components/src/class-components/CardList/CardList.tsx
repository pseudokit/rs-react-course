import React from 'react';
import './CardList.module.scss';
import ICard, { ICharacter } from '../utils/types';
import Card from '../Card/Card';

interface CardListProps {
  cardList: Array<ICharacter>;
}

class CardList extends React.Component<CardListProps> {
  //arr: Array<ApiDataProps> = [{ id: 1, name: 'Alex' }];
  arr: Array<string> = ['a', 'cc', 'b3'];

  render(): React.ReactNode {
    return (
      <>
        {this.props.cardList.map((component, index) => (
          <Card card={component} key={index} />
        ))}
      </>
    );
  }
}

export default CardList;
