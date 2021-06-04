import React from 'react';
import {Button, Grid, TextField} from '@material-ui/core';

export interface SearchBoxProps {
    onClickSearch: (keyword: string) => void;
}

interface State {
    keyword: string;
}

class SearchBox extends React.Component<SearchBoxProps, State> {

    state: State = {
        keyword: ''
    };

    onChangeKeyword(keyword: string) : void {
        this.setState({
            keyword: keyword
        });
    }

    render() {
        return (
            <Grid container>
                <Grid item xs={10}>
                    <TextField
                        placeholder={"키워드를 입력하세요."}
                        value={this.state.keyword}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>)  => this.onChangeKeyword(event.target.value)}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Button onClick={() => this.props.onClickSearch(this.state.keyword)}>SEARCH</Button>
                </Grid>
            </Grid>

        );
    }

}

export default SearchBox;
