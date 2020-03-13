import { useState, useEffect } from 'react';

const useInfiniteScroll = (callback) => {
    const [isFetching, setIsFetching] = useState(false)

    const debounce = (func, delay) => {
        let inDebounce;
        return function () {
            clearTimeout(inDebounce);
            inDebounce = setTimeout(() => {
                func.apply(this, arguments);
            }, delay);
        }
    }

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) return;
        setIsFetching(true);
    }

    useEffect(() => {
        window.addEventListener('scroll', debounce(handleScroll, 500));
        return () => window.removeEventListener('scroll', debounce(handleScroll, 500));
    }, []);

    useEffect(() => {
        if (!isFetching) return;
        callback(() => {
            console.log('called back')
        });
    }, [isFetching]);



    return [isFetching, setIsFetching];
};

export default useInfiniteScroll;