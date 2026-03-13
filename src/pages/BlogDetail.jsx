import React, { useState } from 'react'
import BlogList from '../components/BlogList'
import useFetch from '../components/useFetch'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BlogDetail() {

    const {id} = useParams();

    const navigate = useNavigate();

    const [setError] = useState(null);

    const {data: blogs, loading, error} = useFetch(`http://localhost:8000/posts/${id}`);

    const handleDelete = () => {
        axios
        .delete(`http://localhost:8000/posts/${id}`)
        .then(() => {
            navigate("/")
        })
        .catch(error)
        {
            setError(error.message);
        }
        
    }
  
  return (
    <div>
      {loading && <div>Loading Blogs . . .</div>}
      {error && <div> {error}</div>}
      {blogs && 
      <div className='container mt-3'>
        <Link className='btn btn-outline-primary btn-sm mb-3' to="/">
        <i class="bi bi-arrow-left-circle me-2"></i>
            Go Back
        </Link>
        <h4 className="text-muted">
            {blogs.title}
        </h4>
        <p>
            Written by: {blogs.author}
        </p>
        <p>
            {blogs.content}
        </p>
        <button onClick={handleDelete} className="btn btn-outline-danger btn-sm me-2">
            Delete Blog
        </button>
        <Link className='btn btn-outline-success btn-sm' to={`/edit/${blogs.id}`}>
            Edit Blog
        </Link>
      </div>
      }
    </div>
  )
}

export default BlogDetail
