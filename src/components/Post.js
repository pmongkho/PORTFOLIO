import { Avatar } from '@mui/material';
import React from 'react'
import './Post.css'
import DeleteBlock from './DeleteBlock';

function Post({ id, profilePic, image, username, timestamp, message }) {
  
  return (
    <div className="post">
      <div class="post__top">
        <div className="post__top__left">
          <Avatar src={profilePic} className="post__avatar" />

          <div class="post__topInfo">
            <h3>{username}</h3>
            <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
          </div>
        </div>
        <div className="post__top__right">
          <DeleteBlock id={id} username={ username} />
        </div>
      </div>

      <div class="post__bottom">
        <p>{message}</p>
      </div>

      <div class="post__image">
        <img src={image} alt="" />
      </div>

      <div class="post__options">

      </div>
    </div>
  );
}

export default Post
