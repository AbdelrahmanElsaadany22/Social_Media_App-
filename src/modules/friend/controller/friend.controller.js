import { catchAsyncError } from "../../../utils/error.handler.js";
import friendModel from "../model/friend.model.js";
export const addFriend = catchAsyncError(async (req, res) => {
    const { friendId } = req.body;
    const userId = req.user.id;
    const founded=await friendModel.findOne({user:userId})
    if(!founded){
    try {
        const makefriend = await friendModel.create({ user: userId, friends: [friendId] });
        res.status(200).json({ message: 'Relationship added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while adding friend' });
    }
}
else
{
    try {
        await friendModel.findOneAndUpdate(
            { user: userId },
            { $addToSet: { friends: friendId } },
            { new: true }
        );
        return res.status(200).json({ message: 'Friend added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while adding friend' });
    }
}
});


export const getFriends = catchAsyncError(async (req, res) => {
    const userId = req.user.id;
    const userFound = await friendModel.findOne({ user: userId });

    if (!userFound) {
        return res.status(404).json({ message: 'User not found' });
    }

    const friends = userFound.friends;
    res.status(200).json({ friends });
});

export const deleteFriend = catchAsyncError(async (req, res) => {
    const userId = req.user.id;
    const { friendId } = req.body;

    const userFound = await friendModel.findOneAndUpdate(
        { user: userId },
        { $pull: { friends: friendId } },
        { new: true }
    );

    if (!userFound) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'You are not friends now' });
});
