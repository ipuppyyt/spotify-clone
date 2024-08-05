import React, { useState, useEffect, useRef } from 'react';
import '../assets/styles/search.css';
import { SearchIcon } from '../assets/icons';

const SearchBox = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    useEffect(() => {
        // Update the URL with the search term as a query parameter
        const query = searchTerm ? `?q=${encodeURIComponent(searchTerm)}` : '';
        const newUrl = `${window.location.pathname}${query}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
    }, [searchTerm]);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const clearSearch = () => {
        setSearchTerm('');
        inputRef.current.focus();
    };

    return (
        <div className="search-box hover:ring-[0.5px] ring-neutral-400 transition-all ease-out duration-200">
            <span className="search-icon">
                <SearchIcon width={24} height={24} color='#bfbfbf' />
            </span>
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="What do you want to play?"
                className="search-input font-gotham-bold text-xs text-neutral-200"
                ref={inputRef}
            />
            {searchTerm && (
                <button className="clear-button" onClick={clearSearch}>
                    ✖
                </button>
            )}
        </div>
    );
};

export default SearchBox;