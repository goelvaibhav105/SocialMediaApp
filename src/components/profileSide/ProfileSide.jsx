import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import LeftSearch from '../leftSearch/LeftSearch'
import ProfileCard from '../ProfileCard/ProfileCard'

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
        <LeftSearch/>
        <ProfileCard/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileSide
