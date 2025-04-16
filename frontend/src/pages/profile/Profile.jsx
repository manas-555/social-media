import './profile.css'
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";


export default function Profile() {
  return (
    <>
        <Topbar/>
        <div className="profile">
          <Sidebar/>
          <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                  <img src="../../assets/profile.jpg" alt="" className="profileCoverImg" />
                  <img src="../../assets/person1.avif" alt="" className="profileUserImg" />
                </div>
                <div className="profileInfo">
                    <h4 className='profileInfoName'>Sydney Sweeney</h4>
                    <h4 className='profileInfoDesc'>Hello my friend!</h4>
                </div>
            </div>
            <div className="profileRightBottom">
              <Feed/>
              <Rightbar/>
            </div>
          </div>
        </div>
    </>
  )
}
