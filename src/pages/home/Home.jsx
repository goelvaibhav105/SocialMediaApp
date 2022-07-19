import React from 'react'
import ProfileSide from '../../components/profileSide/ProfileSide'
import "./Home.css"

const Home = () => {
  return (
    <div className="Home">
        <ProfileSide/>
        <div className="postSide"> 2</div>
        <div className="rightSide"> 3</div>
    </div>
  )
}

export default Home