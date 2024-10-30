import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { BasicMenu } from "../components/Menu";
import "../style/componentStyle/card.scss"
import { photoUrl } from "../utils/dynamicAddPhoto";
import { dayFormat } from "../utils/dateHandle";


export const PostsCard = ({ data }) => {
  const url = photoUrl(data.headshot)
  const time = dayFormat(data.posttime, 'MMM DD YY - hh:mm');

  return (
    <div className='card_container'>
      <Card sx={{ minWidth: 800 }}>
        <CardHeader
          avatar={
            // <Avatar aria-label="recipe">
            //   R
            // </Avatar>
            <Avatar alt="Remy Sharp" src={url} />
          }
          action={
            <BasicMenu />
          }
          title={data.name}
          subheader={time}
        />
        <CardContent>
          {data.content}
        </CardContent>
        {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </div>
  )
}