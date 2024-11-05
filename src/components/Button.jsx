import React, { useContext, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import { patchServer, getServer } from "../service/api";
import MyContext from '../utils/context/userContext';
import { setItem } from '../utils/localStorage';
import UpdateContext from '../utils/context/updateData';

export const FollowButton = ({ data, user }) => {
  const [state, setState] = useState({
    follow: 'Follow',
    variant: 'outlined',
    followAry: [],
  });
  const { UPData, setUPData } = useContext(UpdateContext);
  const { value, setValue } = useContext(MyContext);
  const [useId, setUserId] = useState(user.id);

  useEffect(() => {
    initializeData();

  }, [useId, value, data.userId]);

  const initializeData = () => {
    const userData = value.find(item => item.id === useId);
    if (userData) {
      const followersArray = userData.followers || [];
      const isFollowing = followersArray.includes(data.userId);

      setState({
        follow: isFollowing ? 'Following' : 'Follow',
        variant: isFollowing ? 'contained' : 'outlined',
        followAry: followersArray,
      });
    }
  };



  const followingHandler = async () => {
    const updatedFollowAry = state.followAry.includes(data.userId)
      ? state.followAry.filter(item => item !== data.userId)
      : [...state.followAry, data.userId];

    const isFollowing = updatedFollowAry.includes(data.userId);

    setState({
      follow: isFollowing ? 'Following' : 'Follow',
      variant: isFollowing ? 'contained' : 'outlined',
      followAry: updatedFollowAry,
    });

    await patchServer.users(useId, { followers: updatedFollowAry });
    await manageFans();
  };

  const manageFans = async () => {
    const fansData = await getServer.fansNum(data.userId);
    const fansAry = fansData.data.fans;
    const updatedFans = fansAry.includes(useId)
      ? fansAry.filter(item => item !== useId)
      : [...fansAry, useId];

    await patchServer.fansNum(data.userId, { fans: updatedFans });
    reloadUserData();
  };

  const reloadUserData = async () => {
    const api = await getServer.users("users");
    const userData = api.data.filter(item => item.id == user.id);
    setItem("user", userData[0]);
    setValue(api.data);
    setUPData(!UPData);
  }

  return (
    <Button variant={state.variant} startIcon={<PanToolAltIcon />} onClick={followingHandler}>
      {state.follow}
    </Button>
  );
};