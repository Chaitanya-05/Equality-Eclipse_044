import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function BookDetails() {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      const res = await axios.get(http://localhost:3000/api/books/${id});
      setBook(res.data);
    };
    fetchBook();
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>ISBN:</strong> {book.isbn}</p>
      <p><strong>Price:</strong> ${book.price}</p>
      <p><strong>Description:</strong> {book.description}</p>
    </div>
  );
}

export default BookDetails;