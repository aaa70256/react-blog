import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import { photoUrl } from "../utils/dynamicAddPhoto";
import "../style/profile.scss"
import { TabItem } from "../components/Tabs";
import { getServer } from "../service/api";
import { newDaySort } from "../utils/dateHandle";
import { getItem } from "../utils/localStorage";

function ProfilePage() {
  const [url, setUrl] = useState("");
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await getServer.posts();
        const data = newDaySort(response.data);
        setPosts(data);
        setUser(JSON.parse(getItem("user")));
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchData();
  }, [])

  useEffect(() => {
    setUrl(photoUrl(user.headshot));
  }, [user])

  return (
    <div className='profile_container'>
      <div className='headshot_content'>
        <Avatar
          alt={user.name}
          src={url}
          sx={{ width: 150, height: 150 }}
        />
        <h2>{user.name}</h2>
        <p>@{user.id}</p>
        <div className='follow_content'>
          <span>10 fllowing</span>
          <span>200 followers</span>
        </div>
      </div>
      <TabItem posts={posts} />
    </div>
  )
}

export default ProfilePage
