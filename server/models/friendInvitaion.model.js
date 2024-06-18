import mongoose from 'mongoose';

const friendInvitaionSchema = mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
});

const FriendInvitaion = mongoose.model('friendInvitaion', friendInvitaionSchema);
export default FriendInvitaion;