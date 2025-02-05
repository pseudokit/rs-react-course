import * as React from "react";
import SearchInput from "../SearchInput/SearchInput";
import SearchBtn from "../SearchBtn/SearchBtn";
import styles from "./Header.module.scss";
import { ICharacter } from "../utils/types";
import { getWithAxiosCharacters } from "../utils/api";

interface HeaderProps {
    characters: Array<ICharacter>;
    setErrorPage: (isError: boolean) => void;
    updateFunc: (input: Array<ICharacter>) => void;
    updateLoading: () => void;
}
const BASE_SEARCH_QUERY = "a";

type HeaderState = {
    searchQuery: string;
};

class Header extends React.Component<HeaderProps, HeaderState> {
    state: HeaderState = {
        searchQuery: "",
    };

    async componentDidMount(): Promise<void> {
        const searchValue = localStorage.getItem("search");
        if (!searchValue) {
            localStorage.setItem("search", BASE_SEARCH_QUERY);
            this.setSearchValue(BASE_SEARCH_QUERY);
            await this.apiCallQuery(BASE_SEARCH_QUERY);
        } else {
            this.setSearchValue(searchValue);
            await this.apiCallQuery(searchValue);
        }
    }

    render(): React.ReactNode {
        return (
            <div className={styles.Header}>
                <SearchInput
                    onChangeSearchQuery={this.onChangeSearchQuery}
                    searchValue={this.state.searchQuery}
                />
                <SearchBtn
                    characters={this.props.characters}
                    updateFunc={this.props.updateFunc}
                    updateLoading={this.props.updateLoading}
                    searchQuery={this.state.searchQuery}
                    setErrorPage={this.props.setErrorPage}
                    apiCall={this.apiCall}
                />
            </div>
        );
    }

    setSearchValue = (query: string) => {
        this.setState((state) => ({
            ...state,
            searchQuery: query,
        }));
    };
    apiCall = async () => {
        try {
            await this.apiCallQuery(this.state.searchQuery);
        } catch {
            this.props.setErrorPage(true);
            this.props.updateLoading();
        }
    };

    apiCallQuery = async (query: string) => {
        try {
            this.props.updateLoading();
            const dataJson = await getWithAxiosCharacters(query);
            if (!dataJson.length) {
                this.props.setErrorPage(true);
            } else {
                this.props.setErrorPage(false);
            }
            this.props.updateLoading();
            this.props.updateFunc(dataJson);
        } catch {
            this.props.setErrorPage(true);
            this.props.updateLoading();
        }
    };

    setSearchInput = (input: string) => {
        this.setState((state) => ({
            ...state,
            searchQuery: input,
        }));
        localStorage.setItem("search", input);
    };
    onChangeSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setSearchInput(e.target.value);
    };
}

export default Header;
