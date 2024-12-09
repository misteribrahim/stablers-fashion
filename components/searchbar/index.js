import React, { useState } from 'react';
import classes from './index.module.scss';
import { IoSearch } from "react-icons/io5";


const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIconClick = () => {
    setIsOpen(!isOpen);
  };

  const handleInputClick = (event) => {
    event.stopPropagation(); 
  };

  return (
    <div className={classes.searchContainer}>
      <div
        className={`${classes.searchWrapper} ${isOpen ? classes.open : ''}`}
        onClick={handleIconClick} 
      >
        <input
          type="text"
          placeholder="Search..."
          className={classes.searchInput}
          onClick={handleInputClick} 
        />
        <IoSearch  className={classes.searchIcon} onClick={handleIconClick} />
      </div>
    </div>
  );
};

export default SearchBar;
