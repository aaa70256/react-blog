import React, { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import "../style/componentStyle/tabs.scss"
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { PostsCard } from "../components/Card";
import { getItem } from "../utils/localStorage";

export const TabItem = ({ posts }) => {
  const [value, setValue] = useState("1");
  const [filterPosts, setFilterPosts] = useState([]);
  const [userId, setUserId] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    const user = JSON.parse(getItem("user"));
    if (user && user.id) {
      setUserId(user.id);
    }
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await posts;
      if (userId) {
        const filtered = postList.filter(item => userId === item.userId);
        setFilterPosts(filtered);
      }
    }
    fetchPosts();
  }, [posts, userId]);

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
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </div>
  )
}
