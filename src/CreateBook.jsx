import React, { useState } from 'react';

const CreateBook = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [author, setAuthor] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const url = `${import.meta.env.VITE_API_URL}/api/products`;
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        // Basic validation based on the API requirements
        if (!title || !price || !author) {
            setError('Please fill out all required fields: Title, Price, and Author.');
            return;
        }

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    price,
                    author,
                    image_url: imageUrl,
                }),
            });

            if (!response.ok) {
                const errorData = await response.text();
                throw new Error(errorData || 'Something went wrong');
            }

            const data = await response.json();
            setSuccess(data.message);
            // Clear the form on successful submission
            setTitle('');
            setPrice('');
            setAuthor('');
            setImageUrl('');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h2>Create a New Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="author">Author:</label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="imageUrl">Image URL:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                </div>
                <button type="submit">Create Book</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
    );
};

export default CreateBook;