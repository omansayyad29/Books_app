import React, { useState } from 'react';
import Booksdata from './books.json';
import Books from './Books';

const BookList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(Booksdata);

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const filtered = Booksdata.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
    );
    setFilteredBooks(filtered);
  };

  return (
    <div style={{ border: '2px solid black', display: 'block', textAlign: 'center' }}>
      <h1>Books</h1>
      <input
        type="text"
        id="data"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by title or author"
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {filteredBooks.map((ele) => (
          <Books
            key={ele.id} // Ensure each book has a unique `id` property
            bt={ele.title}
            ba={ele.author}
            bi={ele.cover_image}
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;
