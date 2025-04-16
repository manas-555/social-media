import './share.css'
import {PermMedia,Label,Room,EmojiEmotions} from '@mui/icons-material'

export default function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="../assets/person1.avif" alt="" className="shareProfileImg" />
                <input placeholder="What's in your mind Sydney" className='shareInput'/>
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor='tomato' className='shareIcon'/>
                        <span className='shareOptionTest'>Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor='blue' className='shareIcon'/>
                        <span className='shareOptionTest'>Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor='green' className='shareIcon'/>
                        <span className='shareOptionTest'>Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor='gold' className='shareIcon'/>
                        <span className='shareOptionTest'>Feelings</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}
