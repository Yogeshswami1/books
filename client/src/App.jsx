import { useEffect, useState } from 'react';
import axios from 'axios';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';
import { Typography, Layout } from 'antd';

// const BACKEND_URL = "http://localhost:5000/api/books";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const { Title } = Typography;
const { Content } = Layout;
function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await axios.get(BACKEND_URL);
    setBooks(res.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const addBook = async (book) => {
    await axios.post(BACKEND_URL, book);
    fetchBooks();
  };

  const deleteBook = async (id) => {
    await axios.delete(`${BACKEND_URL}/${id}`);
    fetchBooks();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📚 Book Tracker .....App Hello Yogesh kumar kya haal chal hanjiii kumar......</h1>
      <BookForm onAdd={addBook} />
      <BookList books={books} onDelete={deleteBook} />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '900px',
    margin: 'auto',
    padding: '30px',
    fontFamily: 'Arial, sans-serif',
    background: '#f5f7fa',
    borderRadius: '20px',
    boxShadow: '0 0 40px rgba(0,0,0,0.1)',
  },
  heading: {
    textAlign: 'center',
    fontSize: '36px',
    marginBottom: '30px',
    color: '#4b0082',
  }
};

export default App;