import React from 'react';
import './App.css';
import Header from './class-components/Header/Header';
import Results from './class-components/Results/Results';

import { ICharacter } from './class-components/utils/types';

type AppState = {
  characters: Array<number>;
  mess: string;
};

class App extends React.Component<AppState> {
  constructor() {
    super();
    this.state = {
      mess: String,
      characters: [
        {
          birth: 'YT during the ,Noontide of Valinor',
          death: 'FA 455',
          gender: 'Male',
          hair: 'Golden',
          height: null,
          name: 'Aegnor',
          race: 'Elf',
          realm: null,
          spouse: 'Loved ,Andreth but remained unmarried',
          wikiUrl: 'http://lotr.wikia.com//wiki/Aegnor',
          _id: '5cd99d4bde30eff6ebccfbc1',
        },
        {
          birth: 'YT during the ,Noontide of Valinor',
          death: 'FA 455',
          gender: 'Male',
          hair: 'Golden',
          height: null,
          name: 'Alex',
          race: 'Elf',
          realm: null,
          spouse: 'Loved ,Andreth but remained unmarried',
          wikiUrl: 'http://lotr.wikia.com//wiki/Aegnor',
          _id: '5cd99d4bde30eff6ebccfbc1',
        },
      ],
    };
  }
  render(): React.ReactNode {
    return (
      <>
        <Header
          characters={this.state.characters}
          updateFunc={this.updateCharactersFunc}
        />
        <Results
          characters={this.state.characters}
          updateFunc={this.updateCharactersFunc}
        />
      </>
    );
  }

  updateCharactersFunc = (charactersFromApi: Array<ICharacter>) => {
    console.log(this.state);
    /*const newCharacter: ICharacter = {
      birth: 'YT during the ,Noontide of Valinor',
      death: 'FA 455',
      gender: 'Male',
      hair: 'Golden',
      height: null,
      name: 'Alex',
      race: 'Elf',
      realm: null,
      spouse: 'Loved ,Andreth but remained unmarried',
      wikiUrl: 'http://lotr.wikia.com//wiki/Aegnor',
      _id: '5cd99d4bde30eff6ebccfbc1',
    };*/

    this.setState((state: AppState) => ({
      ...state,
      characters: [...charactersFromApi],
    }));
  };
}

export default App;
