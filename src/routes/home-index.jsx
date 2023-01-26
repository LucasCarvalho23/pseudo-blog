import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './home-style.css'
import blogFetch from '../axios/config'

const Home = () => {

  const [posts, setPosts] = useState([])

  const getPosts = async() => {
    
    try {

      const response = await blogFetch.get("/posts")
      const data = response.data
      setPosts(response.data)

    } catch (error) {
      console.log (error)
    }

  }

  // Execute just one time
  useEffect(() => {
    getPosts()
  }, [])

  
  return (
    <div>
      <h1>Lasts posts</h1>
      {posts.length === 0 ? (
        <p>No file...</p>
      ) : (
        posts.map((post) => (
          <div className = 'post-class' key = {post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to = {'/posts/${post.id}'} className = 'btn-class'>Read more</Link>
          </div>
        ))
      )}
    </div>
  )
}

export default Home