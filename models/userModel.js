import {Schema, model} from 'mongoose';


const UserSchema = new Schema({
    userName: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    phoneNumber: {type: String, unique: true, required: true },
    password: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    refreshToken: { type: String, default: null },
}, { timestamps: true})

const User = model('User', UserSchema);

export default User;