import { useState } from "react";
import AddFriendDialog from "./AddFriendDialog";

const AddFriendButton = () => {
    const [showDailog, setShowDailog] = useState(false);
    const handleOpenAddFriendDialog = () => {
        setShowDailog(prevShowDailog => !prevShowDailog);
    };

    return (
        <>
            <button onClick={handleOpenAddFriendDialog}
                className='btn btn-sm mt-2 ml-1 w-3/4 bg-[#3ba55d] text-white hover:bg-green-600'
            >
                Add Friend
            </button>
            <AddFriendDialog
                showDailog={showDailog}
                setShowDailog={setShowDailog}
            />
        </>
    )
}

export default AddFriendButton