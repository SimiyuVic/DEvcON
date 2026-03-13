import React from 'react'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AddBlog() {

  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [publish, setPublish] = useState(false);
  const navigate = useNavigate();

  const handlePublish = (e) => { 
    e.preventDefault();

    const blog = {author, title, category, content}
    setPublish(true);

      axios 
      .post('http://localhost:8000/posts', blog)
      .then(() => {
        navigate("/");
      })

  }

  return (
    <div className='container my-3'>
      <Link className='btn btn-outline-primary btn-sm' to="/">
        <i className="bi bi-arrow-left-circle me-2"></i>
        Go Back
      </Link>
      <div className="row justify-content-center mb-3 p-2">
        <div className="col-md-7 card shadow-lg p-3">
        <h4 className="text-center text-muted">
          Create and Publish a new Blog here !
        </h4>
          <form onSubmit={handlePublish}>
            <div className="mb-3">
              <label className='form-label'>
                Author's Name
              </label>
              <input 
              type="text" 
              className='form-control'
              placeholder='e.g John Doe'
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className='form-label'>
                Blog Title
              </label>
              <input 
              type="text" 
              className='form-control'
              placeholder='Enter your Blog Title'
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
                <label className='form-label'>
                  Select Category
                </label>
                <select
                className='form-select'
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select Category</option>
                  <option value="Technlology">Technology</option>
                  <option value="Health">Health</option>
                  <option value="Business">Business</option>
                </select>
              </div>
              <div className="mb-3">
                <label className='form-label'>
                  Your Blog Content
                </label>
                <textarea
                className='form-control'
                type='text'
                required
                value={content}  
                onChange={(e) =>setContent(e.target.value)}
                />
              </div>
              <div className="mb-3">
                {!publish && <button className="btn btn-outline-primary w-100 btn-sm">
                  Publish Blog
                </button>}
                {publish && <button className="btn btn-outline-danger disabled w-100 btn-sm">
                  Publishing Blog . . .
                </button>}
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddBlog
