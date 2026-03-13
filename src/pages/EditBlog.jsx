import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';

function EditBlog() {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  // Fetch blog data on mount
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/posts/${id}`);
        setAuthor(response.data.author);
        setTitle(response.data.title);
        setCategory(response.data.category);
        setContent(response.data.content);
      } catch (err) {
        setError(err.message || 'Failed to load blog.');
      }
    };
    fetchBlog();
  }, [id]);

  const handleEdit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const updatedBlog = { author, title, category, content };

    try {
      await axios.put(`http://localhost:8000/posts/${id}`, updatedBlog);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Failed to update blog.');
      setLoading(false);
    }
  };

  return (
    <div className="container my-3 px-3">
      <Link className="btn btn-outline-primary btn-sm mb-3" to="/">
        <i class="bi bi-arrow-left-circle"></i> Go Back
      </Link>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row justify-content-center">
        <div className="col-md-7 card shadow-lg p-3">
          <form onSubmit={handleEdit}>
            <div className="mb-3">
              <label className="form-label">Author's Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g John Doe"
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Blog Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Blog Title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Select Category</label>
              <select
                className="form-select"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="Technology">Technology</option>
                <option value="Health">Health</option>
                <option value="Business">Business</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Your Blog Content</label>
              <textarea
                className="form-control"
                rows="6"
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className={`btn w-100 btn-sm ${
                loading ? 'btn-outline-danger disabled' : 'btn-outline-primary'
              }`}
            >
              {loading ? 'Updating Blog...' : 'Update Blog'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditBlog;