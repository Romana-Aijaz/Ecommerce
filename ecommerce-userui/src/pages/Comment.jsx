import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import "./comment.css";

const Comment = () => {
    const [commentText, setCommentText] = useState('');
    const [comments, setComments]= useState([]);
    const onClickHandler = () => {
        setComments((comments) => [...comments, commentText]);
        setCommentText('');
    }
    const handleSubmit = async (event) => {
     event.preventDefault();
  }

   function handleChange(e) {
    e.preventDefault();
    setCommentText(e.target.value);
  }

  return (
    <div >
        <Navbar />
        <div >
        <text className="heading">Comment Box</text>
        <div className='comment-box'>
            <form onSubmit={handleSubmit}>
            <input placeholder='Write a comment..' name="comment" type="text" value={commentText} onChange={handleChange} className='comment-input'/>
            <button onClick={onClickHandler} type='submit' className='submit-button'>Send</button>
        </form>
        </div>
        {comments.map((text) => (
                <div className='comment-container'>Username: {text}</div>
            ))}
        </div>
    </div>
  )
}

export default Comment