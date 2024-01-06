import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://gas-kvas.com/uploads/posts/2023-01/1673393684_gas-kvas-com-p-risunki-na-avatarku-anime-41.jpg' />
     {props.message}
    </div>
  )

}
export default Post;