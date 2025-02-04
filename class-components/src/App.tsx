import React from 'react';
import './App.css';
import Header from './class-components/Header/Header';
import Results from './class-components/Results/Results';

import { ICharacter } from './class-components/utils/types';

type AppState = {
  characters: Array<ICharacter>;
  isLoading: boolean;
  isError: boolean;
};

class App extends React.Component<object, AppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      isLoading: false,
      isError: false,
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
          setErrorPage={this.setErrorPage}
        />
        <Results
          characters={this.state.characters}
          isLoading={this.state.isLoading}
          isError={this.state.isError}
          updateFunc={this.updateCharactersFunc}
        />
      </>
    );
  }
  setErrorPage = (isError: boolean) => {
    this.setState((state: AppState) => ({
      ...state,
      isError: isError,
    }));
  };

  updateCharactersFunc = (charactersFromApi: Array<ICharacter>) => {
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
