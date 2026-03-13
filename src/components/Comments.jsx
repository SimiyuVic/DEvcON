import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

function Comments() {

    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    useEffect(() => {

        const fetchComments = async () => {
            try 
            {
                const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
                setComments(response.data)
                setLoading(false)
            }
            catch(error) 
            {
                setError(error.message)
            }
            finally 
            {
                setLoading(false)
            } 
        }
        fetchComments();

    },[])

  return (
    <div>
      {error && <div>{error} </div>}
      {loading && <div>Loading . . .</div>}
      {comments.map((comment) => {
        return (
            <div key={comment.id}>
            <div className="card">
                 <div className="card-title">{comment.name}</div>
               { console.log(comment.email)}
            </div>
        </div>
        )
        
      })}
    </div>
  )
}

export default Comments
