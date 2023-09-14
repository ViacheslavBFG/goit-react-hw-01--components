import React from 'react';
import { PropTypes } from 'prop-types';
import { ImgAvatar, LiSection, NameSection, ProfileSection, QuaSection, SectionDescription, TegLand, UlSection } from './Profile.styled';


export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileSection className="profile">
      <SectionDescription className="description">
        
        <ImgAvatar src={avatar} alt="User avatar" className="avatar"  />
        <NameSection className="name">{username}</NameSection>
        <TegLand className="tag">{tag}</TegLand>
        <TegLand className="location">{location}</TegLand>
      </SectionDescription>

      <UlSection className="stats">
        <LiSection>
          <span className="label">Followers</span>
          <QuaSection className="quantity">{followers}</QuaSection>
        </LiSection>
        <LiSection>
          <span className="label">Views</span>
          <QuaSection className="quantity">{views}</QuaSection>
        </LiSection>
        <LiSection>
          <span class="label">Likes</span>
          <QuaSection class="quantity">{likes}</QuaSection>
        </LiSection>
      </UlSection>
    </ProfileSection>
  );
};





Profile.PropsTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
