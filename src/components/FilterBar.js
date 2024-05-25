import React from 'react';
import './FilterBar.css';

const FilterBar = ({ itemCount, onToggleFilters, areFiltersVisible }) => {
  return (
    <div className="filter-bar">
      <span>{itemCount} ITEMS</span>
      <button onClick={onToggleFilters}>
        {areFiltersVisible ? 'HIDE FILTER' : 'SHOW FILTER'}
      </button>
      <div className="dropdown">
        <button className="dropbtn">RECOMMENDED</button>
        <div className="dropdown-content">
          <a href="#recommended">RECOMMENDED</a>
          <a href="#newest">NEWEST</a>
          <a href="#price-low-high">PRICE: LOW TO HIGH</a>
          <a href="#price-high-low">PRICE: HIGH TO LOW</a>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
