import { useEffect, useState } from 'react'
import { validateEmail } from '../../shared/utils/Validators';
import {
    Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText
} from '@mui/material';
import InputWithLabel from '../../shared/components/InputWithLabel'
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';

const AddFriendDialog = ({
    isDialogOpen, closeDialogHandler,
    sendFriendInvitation = () => { }
}) => {
    const [email, setEmail] = useState('');
    const [isFormValid, setIsFormValid] = useState('');

    const handleSendInvitation = () => {
        // send friend request to server
    }

    const handleCloseDialog = () => {
        closeDialogHandler();
        setEmail('');
    }

    useEffect(() => {
        setIsFormValid(validateEmail(email));
    }, [email, setIsFormValid])

    return (
        <div>
            <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
                <DialogTitle>
                    <p>
                        Invite a Friend
                    </p>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <p>
                            Enter email of a friend you would like to incite
                        </p>
                    </DialogContentText>
                    <InputWithLabel
                        label='Email' type='text'
                        value={email} setValue={setEmail}
                        placeholder='Enter email address..'
                    />
                </DialogContent>
                <DialogActions>
                    <CustomPrimaryButton
                        onClick={handleSendInvitation}
                        disabled={!isFormValid}
                        label="Send"
                        className='ml-3 mr-3 mb-2 disabled:bg-gray-400 transition-colors'
                    />
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddFriendDialog