import React from 'react'
import { FriendsItem } from 'components/Friends-Item/FriendsItem'


export const Friends = ({friends}) => {
  return (
   {
friends.map(({avatar,name,Isonline,id})=>(

<FriendsItem 
key={id}
avatar={avatar}
name={name}
isOnline={Isonline}
/>

))}
  );
};

   









 
