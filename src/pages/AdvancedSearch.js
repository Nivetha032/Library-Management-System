import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, Button, Row, Col } from 'react-bootstrap';
import BookCard from '../components/BookCard';

const AdvancedSearch = () => {
  const books = useSelector((state) => state.books.books);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const term = searchTerm.toLowerCase();

    const results = books.filter((book) => {
      return (
        (book.title && book.title.toLowerCase().includes(term)) ||
        (book.authors && book.authors.join(', ').toLowerCase().includes(term)) ||
        (book.isbn && book.isbn.toString().includes(term))
      );
    });

    setFilteredBooks(results);
  };

  return (
    <div className="p-4">
      <h3>Advanced Search</h3>
      <Form onSubmit={handleSearch}>
        <Row>
          <Col md={8}>
            <Form.Control
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
          <Col md={4}>
            <Button type="submit" variant="primary">
              Search
            </Button>
          </Col>
        </Row>
      </Form>

      <div className="mt-4">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard key={book._id} book={book} />
          ))
        ) : (
          <p className="mt-3">No books found. Try a different keyword.</p>
        )}
      </div>
    </div>
  );
};

export default AdvancedSearch;
