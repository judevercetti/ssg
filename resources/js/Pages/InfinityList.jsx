import { Spinner } from '@material-tailwind/react';
import React, { useState, useEffect } from 'react';

const InfinityList = ({ defaultItems, Widget }) => {
    const [listItems, setListItems] = useState(defaultItems ?? []);
    const [isFetching, setIsFetching] = useState(false);
    const [isDone, setIsDone] = useState(false);
    const [page, setPage] = useState(2);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!isFetching) return;
        fetchMoreListItems();
    }, [isFetching]);

    function handleScroll() {
        const halfScreenHeight = (window.innerHeight + document.documentElement.scrollTop) / 2;
        if (window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight - 1000 || isFetching || isDone) return;
        setIsFetching(true);
    }

    async function fetchMoreListItems() {
        if (isDone) {
            return;
        }

        try {
            const response = await axios.get(`/api/categories?page=${page}`);
            const data = await response.data;
            if (data.length === 0) {
                setIsFetching(false);
                setIsDone(true);
                window.removeEventListener('scroll', handleScroll);
                return;
            }
            setListItems((prevPosts) => [...prevPosts, ...data]);
            setIsFetching(false);
            setPage((prevPage) => prevPage + 1)
        } catch (error) {
            // console.error('Error fetching posts:', error);
            setIsFetching(false);
        }
    }

    return (
        <>
            <ul className="list-group mb-2">
                {listItems.map((listItem, index) =>
                    <Widget key={index} item={listItem} />
                )}
            </ul>
            {isFetching && !isDone && <div className='w-full h-20'>
                <Spinner className="h-12 w-12 mx-auto" />
                <span></span>
            </div>}
        </>
    );
};


export default InfinityList;