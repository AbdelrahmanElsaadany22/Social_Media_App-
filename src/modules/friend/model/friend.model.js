import mongoose from "mongoose";

const friendSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    friends:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }],
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

const friendModel = mongoose.model('friend', friendSchema);

export default friendModel;
// the one user has many freinds? sure