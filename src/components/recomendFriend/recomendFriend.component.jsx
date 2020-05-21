import React from 'react';
import "./recomendFriend.style.scss";
import FollowUser from '../followUser/followUser.component';
const RecomendFriend = ({user}) => (
    <div className = "wrap">
        <div className="recomendFriend">
            <h2>Gợi ý cho bạn</h2>
            <span>Xem tất cả </span>
        </div>
        <div className="flex-column">
            {
                user.map((el,idx) => (
                    <FollowUser key={idx} imageUrl ={el.imageUrl} name={el.name}  />
                ))
            }
        </div>
    </div>
)
export default RecomendFriend;