import PendingInvitaionsListItem from './PendingInvitaionsListItem';

const DUMMY_INVITATION = [
    {
        _id: '1',
        senderId: { username: 'Sam qwfqefawfqwaf', email: 'sam1@gmaill.com' }
    },
    {
        _id: '2',
        senderId: { username: 'Jhon', email: 'jhon1@gmaill.com' }
    },
]

const PendingInvitaionsList = () => {
    return (
        <div
            className='w-full h-1/5 flex flex-col items-center overflow-auto'
        >
            {DUMMY_INVITATION.map((invitation) => (
                <PendingInvitaionsListItem
                    key={invitation._id}
                    id={invitation._id}
                    username={invitation.senderId.username}
                    email={invitation}
                />
            ))}
        </div>
    )
}

export default PendingInvitaionsList