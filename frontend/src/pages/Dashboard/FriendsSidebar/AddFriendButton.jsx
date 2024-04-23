import { useState } from 'react';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import AddFriendDialog from './AddFriendDialog';

const AddFriendButton = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleOpenAddFriendDialog = () => {
        setIsDialogOpen(true);
    }

    const handleCloseAddFriendDialog = () => {
        setIsDialogOpen(false);
    }

    return (
        <>
            <CustomPrimaryButton
                className='mt-[10px] ml-[5px] w-[80%] h-7 bg-[#3ba55d] hover:bg-opacity-80 transition-all'
                label='Add Friend'
                onClick={handleOpenAddFriendDialog}
            />
            <AddFriendDialog
                isDialogOpen={isDialogOpen}
                closeDialogHandler={handleOpenAddFriendDialog}
            />
        </>
    )
}

export default AddFriendButton