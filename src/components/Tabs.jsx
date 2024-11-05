import React, { useContext, useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import "../style/componentStyle/tabs.scss"
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { PostsCard } from "../components/Card";
import { getItem } from "../utils/localStorage";
import UpdateContext from '../utils/context/updateData';

export const TabItem = ({ posts }) => {
  const [value, setValue] = useState("1");
  const [filterPosts, setFilterPosts] = useState([]);
  const [userId, setUserId] = useState("");
  const [followAry, setFollowAry] = useState([]);
  const [likesAry, setLikesAry] = useState([]);
  const user = JSON.parse(getItem("user"));
  const { UPData, setUPData } = useContext(UpdateContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    if (newValue == 1) {
      const filtered = posts.filter(item => userId === item.userId);
      setFilterPosts(filtered);
    } else if (newValue == 2) {
      let filtData = []
      posts.forEach(el => {
        followAry.forEach(val => {
          if (val == el.userId) {
            filtData.push(el);
          }
        })
      });
      setFilterPosts(filtData);
    } else if (newValue == 3) {
      console.log(posts);
      try {
        let filtData = []
        posts.forEach(el => {
          el.likers.forEach(val => {
            if (val.length >= 1) {
              if (val == user.id) {
                filtData.push(el);
              }
            }
          })
        });
        setFilterPosts(filtData);
      } catch (error) {

      }
    }
  };

  useEffect(() => {
    setValue("1");
    fetchDataAndInitialize();

  }, [posts]);

  useEffect(() => {
    const updateList = async () => {
      try {
        const follow = user.followers
        setFollowAry(follow);
        let filtData = []
        posts.forEach(el => {
          follow.forEach(val => {
            if (val == el.userId) {
              filtData.push(el);
            }
          })
        });
        setFilterPosts(filtData);
      } catch (error) {
        console.log(error);
      }
    }
    updateList();
  }, [UPData]);


  const fetchDataAndInitialize = async () => {
    if (user) {
      setUserId(user.id);
      setFollowAry(user.followers);
      setLikesAry()
      const postList = await posts;
      if (user.id) {
        const filtered = postList.filter(item => user.id === item.userId);
        setFilterPosts(filtered);
      }
    }
  };

  return (
    <div className='tabs_container'>
      <TabContext value={value}>
        <Tabs value={value} onChange={handleChange} variant="fullWidth" centered sx={{ width: "100%" }}>
          <Tab label="Posts" sx={{ flexGrow: 1 }} value="1" />
          <Tab label="Following" sx={{ flexGrow: 1 }} value="2" />
          <Tab label="Likes" sx={{ flexGrow: 1 }} value="3" />
        </Tabs>
        <TabPanel value="1">
          {filterPosts.map(item => (
            <PostsCard
              key={item.id}
              data={item}
            />
          ))}
        </TabPanel>
        <TabPanel value="2">
          {filterPosts.map(item => (
            <PostsCard
              key={item.id}
              data={item}
            />
          ))}
        </TabPanel>
        <TabPanel value="3">
          {filterPosts.map(item => (
            <PostsCard
              key={item.id}
              data={item}
            />
          ))}
        </TabPanel>
      </TabContext>
    </div>
  )
}
