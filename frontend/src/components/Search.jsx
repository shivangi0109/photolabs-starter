import React from 'react';
// import '../styles/Search.scss';

const Search = (props) => {

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Search Form Input", props.searchFormInput);
    props.onSearch(props.searchFormInput);
  };

  return (
    <div className="search">
      <form onSubmit={handleSearch}>
        <input value={props.searchFormInput} onChange={(e) => props.setSearchFormInput(e.target.value)} type="search" name="search" placeholder="Search" />
        <button type="submit" className="search-button">Search</button>
      </form>
    </div>
  );
};

export default Search;