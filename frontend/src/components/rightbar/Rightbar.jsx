import './rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/Online'
import Profile from '../../pages/profile/Profile';

export default function Rightbar({profile}) {
  const HomeRightbar=()=>{
    return (
    <>
    <div className="birthdayContainer">
          <img className='birthdayImg' src='../assets/gift.webp'/>
          <span className='birthdayText'>
            <b>Ryan Renolds</b> and <b>2 other friends</b> have their birthday today.
          </span>
        </div>
        <img className='rightbarAd' src='../assets/ad2.png'/>
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
        </>
    )
  };

  const ProfileRightbar=()=>{
    return (
      <>
      <h4 className='rightbarTitle'>User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Madrid</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="../../assets/person2.avif" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Raj Rao</span>
        </div>
        <div className="rightbarFollowing">
          <img src="../../assets/person3.png" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Sharvari Wagh</span>
        </div>
        <div className="rightbarFollowing">
          <img src="../../assets/person4.webp" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Ryan Renolds</span>
        </div>
        <div className="rightbarFollowing">
          <img src="../../assets/person5.webp" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Ana de Armas</span>
        </div>
        <div className="rightbarFollowing">
          <img src="../../assets/person6.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Vicky Kaushal</span>
        </div>
        <div className="rightbarFollowing">
          <img src="../../assets/person7.webp" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Andrew Garfield</span>
        </div>
        <div className="rightbarFollowing">
          <img src="../../assets/person8.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Tripti Dimri</span>
        </div>
      </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}
