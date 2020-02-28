import React from 'react';
import '../SearchBox.css';
const SearchBox = () => {
    return (
        <div className='search-box'>
            <input type='text' placeholder='Type to search' className='search-txt' />
            <a href='' className='search-btn'>
                <i className='fas fa-search' />
            </a>
        </div>
    );
};

export default SearchBox;
