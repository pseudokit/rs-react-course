import React from 'react';
import './App.css';
import Header from './class-components/Header/Header';
import Results from './class-components/Results/Results';

import { ICharacter } from './class-components/utils/types';

type AppState = {
  characters: Array<number>;
  isLoading: boolean,
  mess: string;
};

class App extends React.Component<AppState> {
  constructor() {
    super();
    this.state = {
      mess: String,
      isLoading: false,
      characters: [],
    };
  }
  render(): React.ReactNode {
    return (
      <>
        <Header
          characters={this.state.characters}
          updateFunc={this.updateCharactersFunc}
          updateLoading={this.switchLoadingState}
        />
        <Results
          characters={this.state.characters}
          isLoading={this.state.isLoading}
          updateFunc={this.updateCharactersFunc}
        />
      </>
    );
  }

  updateCharactersFunc = (charactersFromApi: Array<ICharacter>) => {
    console.log(this.state);
    this.setState((state: AppState) => ({
      ...state,
      characters: [...charactersFromApi],
    }));
  };
  switchLoadingState = () => {
    this.setState((state: AppState) => ({
      ...state,
      isLoading: !state.isLoading,
    }));
  };
}

export default App;

