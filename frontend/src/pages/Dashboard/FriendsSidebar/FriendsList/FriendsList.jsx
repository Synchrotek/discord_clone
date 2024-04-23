import FriendsListItem from "./FriendsListItem"

const DUMMY_FRIENDS = [
    { id: 1, username: 'Mark', isOnline: true },
    { id: 2, username: 'Anna', isOnline: false },
    { id: 3, username: 'Jhon', isOnline: false },
]

const FriendsList = () => {
    return (
        <div className='flex-grow w-full'>
            {DUMMY_FRIENDS.map((frnd) => (
                <FriendsListItem key={frnd.id}
                    id={frnd.id}
                    username={frnd.username}
                    isOnline={frnd.isOnline}
                />
            ))}
        </div>
    )
}

export default FriendsList