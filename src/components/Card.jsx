import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import BasicMenu from "../components/Menu";
import "../style/componentStyle/card.scss"

export const PostsCard = ({content})=> {
  return (
    <div className='card_container'>
      <Card sx={{ minWidth: 800 }}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <BasicMenu />
          }
          title="66666"
          subheader="September 14, 2016"
        />
        <CardContent>
         {content}
        </CardContent>
        {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </div>
  )
}