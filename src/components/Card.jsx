import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import { BasicMenu } from "../components/Menu";
import "../style/componentStyle/card.scss"
import { photoUrl } from "../utils/dynamicAddPhoto";
import { dayFormat } from "../utils/dateHandle";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { patchServer } from "../service/api";
import { getItem } from "../utils/localStorage";
import { FollowButton } from '../components/Button';


export const PostsCard = ({ data }) => {
  const user = (JSON.parse(getItem("user")));
  const url = photoUrl(data.headshot)
  const time = dayFormat(data.posttime, 'MMM DD YY - hh:mm');
  const [likerAry, setLikerAry] = useState([]);
  const [iconColor, setIconColor] = useState('');
  const [isFollowButtonVisible, setFollowButtonVisibility] = useState(false);
  useEffect(() => {
    setLikerAry(data.likers);
    setFollowButtonVisibility(user.id != data.userId);
  }, []);

  useEffect(() => {
    const hasId = likerAry.includes(user.id);
    setIconColor(hasId ? "error" : "default");
  }, [likerAry]);

  function iconClickHandler() {
    const updatedLikerAry = iconColor === "error"
      ? likerAry.filter(item => item !== user.id)
      : [...likerAry, user.id];
    patchServer.posts(data.id, { likers: updatedLikerAry });
    setLikerAry(updatedLikerAry);
    setIconColor(iconColor === "error" ? "default" : "error");
  }
  return (
    <div className='card_container'>
      <Card sx={{ minWidth: 800 }}>
        <CardHeader
          avatar={
            <Avatar alt={data.name} src={url} />
          }
          action={<div className='follow_content'>
            {isFollowButtonVisible && <FollowButton data={data} user={user} />}
            <BasicMenu />
          </div>
          }
          title={data.name}
          subheader={time}
        />
        <CardContent>
          {data.content}
        </CardContent>
        <CardActions>
          <IconButton aria-label="add to favorites" color={iconColor} onClick={iconClickHandler} size="medium">
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  )
}