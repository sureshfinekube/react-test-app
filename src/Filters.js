import React from 'react';
import { useAppContext } from './AppContext';

const Filters = () => {
  const { pageSize, setPageSize, searchQuery, setSearchQuery } = useAppContext();

  const handlePageSizeChange = (event) => {
    setPageSize(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <label>Page Size:</label>
      <select value={pageSize} onChange={handlePageSizeChange}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
      <label>Search:</label>
      <input type="text" value={searchQuery} onChange={handleSearchChange} />
    </div>
  );
};

export default Filters;
