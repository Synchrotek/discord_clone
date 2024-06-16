import { useState } from "react"
import Avatar from '../../../shared/Avatar';
import { IoCloseSharp } from "react-icons/io5";
import { TiTick } from "react-icons/ti";

const PendingInvitationsListItem = ({
    id, username, email,
    acceptFriendInvitation = () => { },
    rejectFriendInvitation = () => { },
}) => {
    const [btnDisabled, setBtnDisabled] = useState(false);

    const handleAcceptInvitation = () => {
        acceptFriendInvitation({ id });
        setBtnDisabled(true);
    }

    const handleRejectInvitation = () => {
        rejectFriendInvitation({ id });
        setBtnDisabled(false);
    }

    return (
        <div className="tooltip flex gap-2 items-center justify-between w-full px-4" data-tip={email}>
            <div className="flex items-center gap-2">
                <Avatar username={username} />
                <p className="">{username}</p>
            </div>
            <div className="flex items-center gap-1">
                <button>
                    <TiTick size={22} />
                </button>
                <button>
                    <IoCloseSharp size={22} />
                </button>
            </div>
        </div>
    )
}

export default PendingInvitationsListItem