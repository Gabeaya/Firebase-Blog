import React, { useEffect, useState } from 'react';
import {getDoc, getDocs} from 'firebase/firestore';
function Home() {
  const [postsLists, setPostsLists] = useState([]);
  const postsCollectionRef = collection(db, "posts")

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
    }
  })
  return <div className='homePage'> </div>;
}

export default Home;
