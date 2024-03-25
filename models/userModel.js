import mongoose from 'mongoose'


const userSchema = mongoose.Schema({
    name:{
        type:String,
    },
    mobile:{
        type:Number
    },
    email:{
        type:String
    },
    dateOfBirth:{
        type:Date,
    },
    dateOfJoining:{
        type:Date
    },
    description:{
        type:String
    },
    role:{
        type:String
    },
    department:{
        type:String
    }
});

const User = mongoose.model('User',userSchema)
export default User