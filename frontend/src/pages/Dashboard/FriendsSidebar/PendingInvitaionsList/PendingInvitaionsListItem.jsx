import { Tooltip } from '@mui/material';
import React, { useState } from 'react'
import Avatar from '../../../shared/components/Avatar';
import InvitationDecisionButtons from './InvitationDecisionButtons';

const PendingInvitaionsListItem = ({
    id, username, email,
    acceptFriendInvitation = () => { },
    rejectFriendInvitation = () => { },
}) => {
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const handleAcceptInvitation = () => {
        acceptFriendInvitation({ id });
        setButtonDisabled(true);
    }
    const handleRejectInvitation = () => {
        rejectFriendInvitation({ id });
        setButtonDisabled(true);
    }

    return (
        <div className='w-full'>
            <div className='flex items-center justify-between px-2'>
                <div className='flex items-center gap-1'>
                    <Avatar username={username} />
                    <p className='text-slate-400'>{username}</p>
                </div>
                <InvitationDecisionButtons
                    disabled={buttonDisabled}
                    acceptInvitationHandler={handleAcceptInvitation}
                    rejectInvitationHandler={handleRejectInvitation}
                />
            </div>
        </div>
    )
}

export default PendingInvitaionsListItem