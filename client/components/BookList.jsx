import React from 'react';

function BookList({ books, onDelete }) {
  return (
    <div style={styles.grid}>
      {books.map((book) => (
        <div key={book._id} style={styles.card}>
          <h3 style={styles.title}>{book.title}</h3>
          <p style={styles.author}><strong>Author:</strong> {book.author}</p>
          <p style={styles.status}><strong>Status:</strong> {book.status}</p>
          <p style={styles.rating}>⭐ {book.rating}</p>
          <button style={styles.button} onClick={() => onDelete(book._id)}>🗑️ Delete</button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s',
  },
  title: {
    margin: '0 0 10px 0',
    fontSize: '20px',
    color: '#4b0082',
  },
  author: {
    margin: '0 0 5px 0',
    color: '#333',
  },
  status: {
    margin: '0 0 5px 0',
    color: '#555',
  },
  rating: {
    fontSize: '18px',
    margin: '10px 0',
  },
  button: {
    backgroundColor: '#dc3545',
    color: '#fff',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
  }
};

export default BookList;
