import React from 'react';

const UserCard = (props) => {
    
    return(
        <div className='ui card'>
            <div className="content">
                <div className='header'>Shreya Avaiya</div>
                <div className='desciption'>
                    { props.children}
                </div>
                <div className='ui buttom button '>
                    <i className='add icon'>
                        Add Friend
                    </i>
                </div>
            </div>
        </div>
    )
}


export default UserCard;