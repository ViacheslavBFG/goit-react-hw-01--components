import React from 'react';
import PropTypes from 'prop-types';

export const FriendsItem = ({ avatar, name, isOnline }) => {
  return <li class="item">
  <span class="status"></span>
  <img class="avatar" src={avatar} alt="User avatar" width="48" />
  <p class="name">{name}</p>
</li>
};


FriendsItem.propTypes = { 
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};