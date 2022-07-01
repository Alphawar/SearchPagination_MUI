import { Pagination, PaginationItem } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

const PaginationComp = ({pageQuantity, page, setPage}) => {
    return (
        <Pagination 
            count={pageQuantity}
            page={page}
            showFirstButton
            showLastButton
            onChange={(e, pageNumber) => setPage(pageNumber)}
            sx={{my: 3, mx: 'auto'}}
            renderItem={(item) => (
                <PaginationItem
                    component={RouterLink}
                    to={`/?page=${item.page}`}
                    {...item}
                />
                )}
        />
    );
};

export default PaginationComp;