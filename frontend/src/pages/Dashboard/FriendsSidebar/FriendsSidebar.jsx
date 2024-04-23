import AddFriendButton from "./AddFriendButton"
import FriendsList from "./FriendsList/FriendsList"
import FriendsTitle from "./FriendsTitle"
import PendingInvitaionsList from "./PendingInvitaionsList/PendingInvitaionsList"

const FriendsSidebar = () => {
    return (
        <div className='w-56 h-full flex flex-col items-center bg-[#2F3136]'
        >
            <AddFriendButton />
            <FriendsTitle title='Private Messages' />
            <FriendsList />
            <FriendsTitle title='Invitations' />
            <PendingInvitaionsList />
        </div>
    )
}

export default FriendsSidebar