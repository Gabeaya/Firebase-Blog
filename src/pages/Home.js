import React, { useEffect, useState } from 'react';
import {getDocs, collection} from 'firebase/firestore';
import {db} from '../firebase';
function Home() {
  const [postsLists, setPostsLists] = useState([]);
  const postsCollectionRef = collection(db, "posts")

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      console.log(data); 
    };

    getPosts();
  })
  return <div className='homePage'> </div>;
}

export default Home;
