import FriendInvitaion from "../models/friendInvitaion.model.js";
import User from "../models/user.model.js";

export const postInvite = async (req, res) => {
    const { email: targetEmail } = req.body;

    const { userId, email: senderEmail } = req.user;

    // check if this friend exists or not --------
    if (targetEmail.toLowerCase() === senderEmail.toLowerCase()) {
        return res.status(409).json({
            success: false,
            message: "Sorry, you can't send invite to yourself!",
        });
    }

    const targetUser = await User.findOne({
        email: targetEmail.toLowerCase(),
    });
    if (!targetUser) {
        return res.status(404).json({
            success: false,
            message: `User of ${targetEmail} doesn't exists.`,
        });
    }

    return res.json(targetEmail);
};