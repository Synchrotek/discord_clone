import React from 'react'
import { DUMMY_FRIENDS } from '../../../../constants/FriendsDemoData';
import FriendsListItem from './FriendsListItem';

const FriendsList = () => {
    return (<div className='flex-grow w-4/5 border-b-2'>
        {DUMMY_FRIENDS.map(friend => (
            <FriendsListItem
                key={friend.id}
                username={friend.username}
                id={friend.id}
                isOnline={friend.isOnline}
            />
        ))}
    </div>
    )
}

export default FriendsList;