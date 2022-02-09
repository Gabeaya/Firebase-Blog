import React, {useState} from 'react';
import { addDoc, collection } from 'firebase/firestore'; //allows to add a doc to the database table
import { db, auth } from '../firebase';
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const [title, setTitle] = useState("");//collects user input for title
  
  const [postText, setPostText] = useState("");//collects user input for post info
  const postsCollectionRef = collection(db, "posts")
  let navigate = useNavigate();
  const createPost = async () => {
    await addDoc(postsCollectionRef, {title, postText, author: {name: auth.currentUser.displayName, id: auth.currentUser.uid},
    });
    navigate("/");
  };

  return (
    <div className="createPostPage">
      <div className='cpContainer'>  
        <h1> Create Post </h1>
        <div className='inputGp'>
          <label> Title:</label>
          <input placeholder='Title..' onChange={(event) => {
            setTitle(event.target.value);
            }}
          />
        </div>

        <div className='inputGp'>
          <label> Post:</label>
          <textarea placeholder='Post' onChange={(event) => {
            setPostText(event.target.value);
          }}/>
        </div>
        <button> Submit Post</button>
      </div>
    </div>
  );
}

export default CreatePost;
