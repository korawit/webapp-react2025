// src/Update.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Update() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState({ title: '', author: '', price: '', image_url: '' });
    const url = `${import.meta.env.VITE_API_URL}/api/products`; 

    useEffect(() => {
        async function fetchBook() {
            try {
                const response = await fetch(url + `/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setBook(data);
                } else {
                    throw new Error('Failed to fetch book data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
        fetchBook();
    }, [url]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook(prevBook => ({ ...prevBook, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(url + `/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(book),
            });
            if (response.ok) {
                alert('Book updated successfully');
                navigate('/'); // Redirect to the book list after successful update
            } else {
                alert('Failed to update book');
                throw new Error('Failed to update book');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit Book</h2>
            <div>
                <label>Title:</label>
                <input type="text" name="title" value={book.title} onChange={handleChange} required />
            </div>
            <div>
                <label>Author:</label>
                <input type="text" name="author" value={book.author} onChange={handleChange} required />
            </div>
            <div>
                <label>Price:</label>
                <input type="number" name="price" value={book.price} onChange={handleChange} required />
            </div>
            <div>
                <label>Image URL:</label>
                <input type="text" name="image_url" value={book.image_url} onChange={handleChange} />
            </div>
            <button type="submit">Update Book</button>
        </form>
    );
}