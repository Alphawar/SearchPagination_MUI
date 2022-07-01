import React, { useEffect, useState } from 'react';
import { getPosts } from '../API/index';
import { BASE_URL } from '../API/config';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';
import SearchInput from '../components/SearchInput';
import PostsList from '../components/PostsList';
import PaginationComp from '../components/PaginationComp';

const HomePage = () => {

    const [params] = useSearchParams()
    const history = useNavigate()

    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(Number(params.get('page')) || 1);
    const [pageQuantity, setPageQuantity] = useState(0);
  
    useEffect(() => {
        getPosts(BASE_URL, query, setPosts, setPageQuantity, setPage)
        query && history(`/?page=1`)
        //eslint-disable-next-line
    }, [query])
  
    useEffect(() => {
     page !== 1 && getPosts(BASE_URL, query, setPosts, setPageQuantity, setPage, page)
      //eslint-disable-next-line
    }, [page])

    return (
        <>
            <SearchInput
                query={query}
                setQuery={setQuery}
            />
            <Stack spacing={2}>
                {!!pageQuantity && (
                    <PaginationComp 
                        pageQuantity={pageQuantity}
                        page={page}
                        setPage={setPage}
                    />
                )}
                <PostsList posts={posts}/>
            </Stack>
        </>
    );
};

export default HomePage;