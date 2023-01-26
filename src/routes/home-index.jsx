import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './home-style.css'
import axios from 'axios'

const Home = () => {

  const [posts, setPosts] = useState([])

  const getPosts = async() => {
    
    try {

      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")

      const data = response.data
      console.log (response.data)
      setPosts(response.data)
      console.log (posts.length)

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
      <h1>Lasts posts: </h1>
      {posts.length === 0 ? (
        <p>Loading...</p>
      ) : (
        posts.map((post) => (
          <div className = 'post' key = {post.id}>
            <h2>{post.title}</h2>
          </div>
        ))
      )}
    </div>
  )
}

export default Home