import { useState } from 'react';

function BookForm({ onAdd }) {
  const [form, setForm] = useState({
    title: '',
    author: '',
    status: 'Reading',
    rating: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({ title: '', author: '', status: 'Reading', rating: 1 });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input style={styles.input} placeholder="Title" required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <input style={styles.input} placeholder="Author" required value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} />
      <select style={styles.input} value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
        <option value="Reading">Reading</option>
        <option value="Completed">Completed</option>
        <option value="Wishlist">Wishlist</option>
      </select>
      <input style={styles.input} type="number" min={1} max={5} value={form.rating} onChange={(e) => setForm({ ...form, rating: e.target.value })} />
      <button style={styles.button} type="submit">➕ Add Book</button>
    </form>
  );
}

const styles = {
  form: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '15px',
    marginBottom: '30px',
  },
  input: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    gridColumn: 'span 2',
    padding: '12px',
    backgroundColor: '#4b0082',
    color: '#fff',
    fontSize: '18px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background 0.3s',
  }
};

export default BookForm;
