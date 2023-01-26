import React from 'react'
import './newPost-style.css'
import blogFetch from '../axios/config'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const newPost = () => {

  const navigate = useNavigate()

  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const createPost = async (e) => {
    e.preventDefault(e)

    const post = {title, body, userId: 1}

    await blogFetch.post("/posts", {
      body: post,
    })

    navigate("/")
  }

  return (
    <div className = 'new-post-class'>
      <h2>Insert new post</h2>
      <form onSubmit = { (e) => createPost(e) }>

        <div className = 'form-control-class'>
          <label htmlFor=' = "title-class'>Title</label>
          <input type="text" name = 'title-class' placeholder = 'Type a title' id = "title-id" onChange = { (e)=> setTitle(e.target.value) } />
        
          <label htmlFor=' = "body-class'>Content: </label>
          <textarea name = 'body-class' placeholder = 'Type a post' id = "body-id" cols = "30" rows = "10" onChange = { (e)=> setBody(e.target.value) } />
        </div>

        <p>
          <input type = "submit" value = "CreatePost" className = 'btn-class'></input>
        </p>
      </form>

    </div>
  )
}

export default newPost