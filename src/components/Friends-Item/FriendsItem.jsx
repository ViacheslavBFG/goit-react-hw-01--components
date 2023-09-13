import React from 'react'

export const FriendsItem = ({avatar,name,isOnline}) => {
  return (
    <li class="item">
  {/* $status={isOnline?'true':'false'} */}
  <img src={avatar} src="friend" alt="User avatar" width="48" />
  <p class="name">{name}</p>
</li>
  )
}


