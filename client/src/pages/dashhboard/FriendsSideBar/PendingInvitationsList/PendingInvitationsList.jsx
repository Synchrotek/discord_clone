import React from 'react'
import { DUMMY_INVITATIONS } from '../../../../constants/FriendsDemoData';
import PendingInvitationsListItem from './PendingInvitationsListItem';

const PendingInvitationsList = () => {
    return (<div className='w-full h-1/5 flex flex-col gap-3 items-center overflow-auto mt-3'>
        {DUMMY_INVITATIONS.map(invitation => (
            <PendingInvitationsListItem key={invitation._id}
                id={invitation._id}
                username={invitation.senderId.username}
                email={invitation.senderId.email}
            />
        ))}
    </div>
    )
}

export default PendingInvitationsList;