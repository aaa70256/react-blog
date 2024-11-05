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
  const [followersNum, setFollowersNum] = useState(null);
  const [fans, setFans] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await getServer.posts();
        const sortedData = newDaySort(response.data);
        setPosts(sortedData);

        const storedUser = JSON.parse(getItem("user"));
        setUser(storedUser);
        setFans(storedUser.followers.length);
        if (storedUser) {
          setUrl(photoUrl(storedUser.headshot));

          if (storedUser.followers) {
            setFollowersNum(storedUser.followers.length);
          }
        }


      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchData();
  }, []);

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
          <span>{followersNum} following</span>
          <span>{fans} followers</span>
        </div>
      </div>
      <TabItem posts={posts} />
    </div>
  )
}

export default ProfilePage
