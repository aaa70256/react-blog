import React, { useEffect, useState } from 'react'
import { PostsCard } from "../components/Card";
import { getServer } from "../service/api";
import "../style/home.scss"

function HomePage() {
  const [posts,setPosts] = useState([]);

  useEffect( ()=>{
    const fetchData = async () => {
      try {
       const response = await getServer.posts();
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchData();
  },[])

  return (
    <div className='home_page'>
       {posts.length > 0 ?(posts.map((item, index) => (
        <PostsCard 
          key={item.id || index}  // 最好使用唯一的 id
          content={item.content}
        />
      ))):(
        <span className='non_post'>尚無貼文</span>
      )
    }
    </div>
  )
}

export default HomePage