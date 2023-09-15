import React from 'react';
import PropTypes from 'prop-types';
import { LiSection, StyledStatus } from './FriendsItem.Styled';

export const FriendsItem = ({ avatar, name, isOnline }) => {
  return <LiSection class="item">
  <StyledStatus $status={isOnline ? 'true' : 'false'}/>
  <img class="avatar" src={avatar} alt="User avatar" width="48" />
  <p class="name">{name}</p>
</LiSection>
};


FriendsItem.propTypes = { 
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};