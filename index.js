import React from 'react';
import ReactDOM from 'react-dom';
import profile1 from './img/img1.jpg';
import SingleComment from './SingleComment';
import UserCard from './UserCard';

const App = () => {
     return(
        <div className='ui comments'>
            <UserCard>
            <SingleComment 
            name='Shreya'
            date='Today at 5:00PM'
            text='its a amazing'
            />
            </UserCard>
            <UserCard>
            <SingleComment 
            name='Sarah'
            date='Today at 6:00PM'
            text='Great Work'
            />
            </UserCard>
            <UserCard>
            <SingleComment
            name='Sam'
            date='Today at 6:15PM'
            text='Thanks'
             />
             </UserCard>
 
      </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)