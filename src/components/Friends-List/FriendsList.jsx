import React from 'react';
import PropTypes from 'prop-types';
import { FriendsItem } from 'components/Friends-Item/FriendsItem';
import { StyleSection } from './FriendList.style';

export const FriendsList = ({ friends }) => {
  return (
    <StyleSection>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendsItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </StyleSection>
  );
};

FriendsList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
