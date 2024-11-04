import React, { useContext, useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import { patchServer } from "../service/api";
import MyContext from '../utils/userContext';

export const FollowButton = ({ data, user }) => {
  const [follow, setFollow] = useState("");
  const [variant, setVariant] = useState("");
  const [followAry, setFollowAry] = useState([]);
  const { value } = useContext(MyContext);
  const [filterUser, setFiltUser] = useState([]);
  const [useId, setUserId] = useState("");
  const [fans, setFans] = useState([]);


  useEffect(() => {
    setUserId(user.id);
  }, []);

  useEffect(() => {
    const userData = value.filter(item => item.id === useId);
    if (userData.length > 0) {
      setFiltUser(userData[0]);

      const followersArray = userData[0].followers || [];
      setFollowAry(followersArray);

      if (followersArray.length >= 1) {
        followersArray.forEach(el => {
          if (el === data.userId) {
            setFollow("Following");
            setVariant("contained");
          } else {
            setFollow("Follow");
            setVariant("outlined");
          }
        });
      } else {
        setFollow("Follow");
        setVariant("outlined");
      }
    }
  }, [useId, value]);

  function followingHandler() {
    let updatedFollowAry;

    if (followAry.length === 0) {
      updatedFollowAry = [...followAry, data.userId];
      setFollow("Following");
      setVariant("contained");
    } else {
      const foundUser = followAry.includes(data.userId);
      if (!foundUser) {
        updatedFollowAry = [...followAry, data.userId];
        setFollow("Following");
        setVariant("contained");
      } else {
        updatedFollowAry = followAry.filter(item => item !== data.userId);
        setFollow("Follow");
        setVariant("outlined");
      }
    }

    setFollowAry(updatedFollowAry);
    patchServer.users(useId, { followers: updatedFollowAry });
    manangeFans();
  }

  function manangeFans() {
    console.log(data, user, value);
    const filtUser = value.filter(item => item.id == data.userId);
    const fansData = filtUser[0].fans;
    let fans = [];
    if (fansData.length == 0) {
      fans = [useId];
    } else {
      const hasFans = fansData.some(user => user === useId);
      fans = hasFans
        ? fansData.filter(item => item !== useId)
        : [...fansData, useId];
    }

    patchServer.users(data.userId, { fans: fans });
  }
  return (
    <div>
      <Button variant={variant} startIcon={<PanToolAltIcon />} onClick={followingHandler}>
        {follow}
      </Button>
    </div>
  )
}
