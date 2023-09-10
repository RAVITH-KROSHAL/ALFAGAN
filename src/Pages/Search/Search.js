import React, { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // You can implement your search logic here
    console.log('Searching for:', searchTerm);
  };

  return (
    <div>
      <h1>Search Page</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter your search term..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;





// export default function  Search(){
//   return(
//       <>
     
//       <h2>Search Page</h2>
//       </>
//   )
// }