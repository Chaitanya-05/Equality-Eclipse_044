import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get('http://localhost:3000/api/books');
      setBooks(res.data.docs);
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Books</h2>
      <div className="row">
        {books.map(book => (
          <div key={book._id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
                <p className="card-text">Price: ${book.price}</p>
                <Link to={/book/${book._id}} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;