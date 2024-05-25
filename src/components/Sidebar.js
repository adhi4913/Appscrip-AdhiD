// Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [filters, setFilters] = useState({
    customizable: false,
    idealFor: {
      men: false,
      women: false,
      babyAndKids: false,
    },
    occasion: 'All',
    work: 'All',
    fabric: 'All',
    segment: 'All',
    suitableFor: 'All',
    rawMaterials: 'All',
    pattern: 'All',
  });

  const [expanded, setExpanded] = useState({
    idealFor: false,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (name in filters.idealFor) {
      setFilters({
        ...filters,
        idealFor: {
          ...filters.idealFor,
          [name]: checked,
        },
      });
    } else {
      setFilters({
        ...filters,
        [name]: checked,
      });
    }
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const toggleExpand = (section) => {
    setExpanded({
      ...expanded,
      [section]: !expanded[section],
    });
  };

  return (
    <div className="sidebar">
      <div className="filter-section">
        <input
          type="checkbox"
          name="customizable"
          checked={filters.customizable}
          onChange={handleCheckboxChange}
        />
        <label>Customizable</label>
      </div>

      <div className="filter-section">
        <label onClick={() => toggleExpand('idealFor')}>IDEAL FOR</label>
        {expanded.idealFor && (
          <div className="filter-options">
            <label>
              <input
                type="checkbox"
                name="men"
                checked={filters.idealFor.men}
                onChange={handleCheckboxChange}
              />
              Men
            </label>
            <label>
              <input
                type="checkbox"
                name="women"
                checked={filters.idealFor.women}
                onChange={handleCheckboxChange}
              />
              Women
            </label>
            <label>
              <input
                type="checkbox"
                name="babyAndKids"
                checked={filters.idealFor.babyAndKids}
                onChange={handleCheckboxChange}
              />
              Baby & Kids
            </label>
          </div>
        )}
      </div>

      {['occasion', 'work', 'fabric', 'segment', 'suitableFor', 'rawMaterials', 'pattern'].map((filter) => (
        <div className="filter-section" key={filter}>
          <label onClick={() => toggleExpand(filter)}>{filter.replace(/([A-Z])/g, ' $1').toUpperCase()}</label>
          {expanded[filter] && (
            <select name={filter} value={filters[filter]} onChange={handleSelectChange}>
              <option value="All">All</option>
              <option value="MEN">MEN</option>
              <option value="WOMEN">WOMEN</option>
              <option value="Baby & Kids">BABY & KIDS</option>
              {/* Add more options as needed */}
            </select>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
