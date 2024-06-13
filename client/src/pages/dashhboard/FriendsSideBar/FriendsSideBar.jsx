import React from 'react'
import AddFriendButton from './AddFriendButton';
import FriendsTitle from './FriendsTitle';
import FriendsList from './FriendsList/FriendsList';
import PendingInvitationsList from './PendingInvitationsList/PendingInvitationsList';

const FriendsSideBar = () => {
    return (<div className='w-[224px] h-full flex flex-col items-center bg-[#2F3136] py-3'>
        <AddFriendButton />
        <FriendsTitle title={"Private Messages"} />
        <FriendsList />
        <FriendsTitle title={"Invitations"} />
        <PendingInvitationsList />
    </div>
    )
}

export default FriendsSideBar