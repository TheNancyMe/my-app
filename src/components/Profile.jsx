import React from 'react';
import './Profile.css'
import MyPosts from '../MyPosts/MyPosts';


const Profile = () => {
    return <div>
    <div><img src = 'https://avatars.mds.yandex.net/i?id=fc233d393de87d88b259fbd62f01842c4073d5be-10874712-images-thumbs&n=13'/>
     </div>
      <div>
        ava + description
      </div>
     <MyPosts />
    </div>
}
export default Profile;