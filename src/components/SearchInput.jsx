import React from 'react';
import { TextField } from '@mui/material';

const SearchInput = ({query, setQuery}) => {
    return (
        <TextField
            type="search" 
            fullWidth
            label="Query"
            value={query}
            onChange={e => setQuery(e.target.value)}
        />
    );
};

export default SearchInput;