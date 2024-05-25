import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import ProductGrid from './components/ProductGrid';
import Header from './components/Header';
import Footer from './components/Footer';
import FilterBar from './components/FilterBar';
import InfoBar from './components/InfoBar';
function App() {
  const [areFiltersVisible, setAreFiltersVisible] = useState(true);

  const handleToggleFilters = () => {
    setAreFiltersVisible(!areFiltersVisible);
  };

  return (
    <Router>
      <Header />
      <InfoBar />
      <FilterBar
        itemCount={3425} // Update this value as needed
        onToggleFilters={handleToggleFilters}
        areFiltersVisible={areFiltersVisible}
      />
      <div className="layout">
        {areFiltersVisible && <Sidebar />}
        <div className="content">
          <Routes>
            <Route path="/shop" element={<ProductGrid />} />
            <Route path="/kids" element={<div>Kids</div>} />
            <Route path="/station" element={<div>Station</div>} />
            <Route path="/about" element={<div>About</div>} />
            <Route path="/contact" element={<div>Contact</div>} />
            <Route path="/" element={<ProductGrid />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
