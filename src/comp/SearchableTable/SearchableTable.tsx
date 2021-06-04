import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import SearchBox from "../SearchBox/SearchBox";

export interface SearchableTableProps {
    data: any[];
    columns: string[];
    filterKeyName: string;
}

interface State {
    keyword: string;
}

class SearchableTable extends React.Component<SearchableTableProps, State> {

    state: State = {
        keyword: ''
    };

    constructor(props: SearchableTableProps) {
        super(props);
        this.onClickSearch = this.onClickSearch.bind(this);
    }

    onClickSearch(keyword: string) {
        this.setState({
            keyword: keyword
        });
    }

    render() {

        const {data, columns, filterKeyName} = this.props;
        const {keyword} = this.state;

        return (
            <div>
                <SearchBox onClickSearch={this.onClickSearch}/>

                <Table>
                    <TableHead>
                        {
                            columns.map(column => (
                                <TableCell>{column}</TableCell>
                            ))
                        }
                    </TableHead>
                    <TableBody>
                        {
                            data.filter(row => row[filterKeyName].include(keyword))
                                .map(row => (
                                    <TableRow>
                                        {
                                            columns.map(column => (
                                                <TableCell>{row[column]}</TableCell>
                                            ))
                                        }
                                    </TableRow>
                                ))
                        }
                    </TableBody>
                </Table>
            </div>

        );
    }

}

export default SearchableTable;
