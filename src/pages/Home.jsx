import React from 'react'
import BlogList from '../components/BlogList'
import useFetch from '../components/useFetch'



function Home() {
  const {data: blogs, loading, error} = useFetch('http://localhost:8000/posts');
  
  return (
    <div>
      {loading && <div>Loading Blogs . . .</div>}
      {error && <div> {error}</div>}
      {blogs && <BlogList blogs={blogs} title="Your Home of Amazing Tech News !"/>}
    </div>
  )
}

export default Home
