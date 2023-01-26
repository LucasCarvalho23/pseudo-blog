import React from 'react'
import './newPost-style.css'

const newPost = () => {
  return (
    <div className = 'new-post-class'>
      <h2>Insert new post</h2>
      <form>
        <div className = 'form-control-class'>
          <label htmlFor=' = "title-class'>Title</label>
          <input type="text" name = 'title-class' placeholder = 'Type a title' id = "title-id" />
        </div>
        <div className='form-control-class'>
          <label htmlFor=' = "body-class'>Content: </label>
          <textarea name = 'body-class' placeholder = 'Type a post' id = "body-id" cols = "30" rows = "10" />
        </div>
        <p>
          <input type = "submit" value = "CreatePost" className = 'btn-class'></input>
        </p>
      </form>

    </div>
  )
}

export default newPost