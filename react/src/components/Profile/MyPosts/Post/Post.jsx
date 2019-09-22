import React from 'react';
import s from './Post.module.css';
import userfoto from './../../../../asets/images/1.jpeg';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src={userfoto}/>
        { props.message }
          <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;