import { useEffect, useState } from 'react'
import { validateEmail } from '../../../utils/validator';
import { toast } from 'react-hot-toast';

const AddFriendDialog = ({
    showDailog, setShowDailog,
    sendFriendInvitation = () => { },
}) => {
    const [email, setEmail] = useState('');
    const [isFormValid, setIsFormValid] = useState('');

    useEffect(() => {
        setIsFormValid(validateEmail(email));
    }, [email, setIsFormValid]);

    const handleSendInvitation = (e) => {
        e.preventDefault();
        console.log('isFormValid: ', isFormValid);
        if (!isFormValid) {
            return toast.error('Eneter valid email id');
        }
        setShowDailog(false);
        setEmail("");
    };

    return (<div className=''>
        <dialog id="friendinvitaion_modal" className={`modal ${showDailog && 'modal-open'}`}>
            <form onSubmit={handleSendInvitation}
                className="modal-box flex flex-col"
            >
                <h3 className="font-bold text-lg border-b-2">
                    Invite a Friend
                </h3>
                <p className="my-3">
                    Enter Email Id of a friend you want to invite :
                </p>
                <input type="email"
                    className='input bg-slate-600 focus-within:outline-none'
                    placeholder="Friend's Email Id . ."
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <button type='submit'
                    className='bg-orange-700 w-[50%] my-4 btn'
                >Send Invitation
                </button>
            </form>
            <form method="dialog" className="modal-backdrop">
                <button className='cursor-default'
                    onClick={() => setShowDailog(false)}
                />
            </form>
        </dialog>
    </div>
    )
}

export default AddFriendDialog