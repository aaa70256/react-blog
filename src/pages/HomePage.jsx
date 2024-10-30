import React, { useEffect, useState } from 'react'
import { PostsCard } from "../components/Card";
import { getServer } from "../service/api";
import "../style/home.scss"
import { newDaySort } from "../utils/dateHandle";

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await getServer.posts();

        const data = newDaySort(response.data)
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchData();
  }, [])

  return (
    <div className='home_page'>
      {posts.length > 0 ? (posts.map(item => (
        <PostsCard
          key={item.id}  // 最好使用唯一的 id
          data={item}
        />
      ))) : (
        <span className='non_post'>尚無貼文</span>
      )
      }
    </div>
  )
}

export default HomePage