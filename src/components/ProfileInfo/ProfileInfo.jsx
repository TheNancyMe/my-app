import React from 'react';
import s from './ProfileInfo.module.css'



const ProfileInfo = () => {
    return ( 
    <div>
    <div><img src = 'https://avatars.mds.yandex.net/i?id=fc233d393de87d88b259fbd62f01842c4073d5be-10874712-images-thumbs&n=13'/>
     </div>
      <div className = {s.descriptionBlock}>
        ava + description
      </div>
    </div>
     )
}
export default ProfileInfo;