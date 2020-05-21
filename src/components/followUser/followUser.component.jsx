import React from 'react';
import "./followUser.style.scss"

const FollowUser  = ({imageUrl,name}) => (
    <div className= "follow">
        <div className = "f-left">
            <img  src={imageUrl} alt="avatar"/>
            <div>
                <h4>{name}</h4>
                <span>Gợi ý cho bạn</span>
            </div>  
        </div>
        <div className = "f-right">
            <span> Theo Dõi</span>
        </div>
    </div>
)
export default FollowUser;