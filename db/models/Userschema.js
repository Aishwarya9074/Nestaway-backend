import {Schema,model} from 'mongoose'

const userSchema=Schema(
    {
    username:{
        type:String,
        required:True,
        trim:true
    },
   useremail:{
        type:String,
        required:True,
        unique:true
    },
    userpassword:{
        type:String,
        required:true

    },
    bookings:[{
        type:Schema.Types.ObjectId,
        ref:'Booking'
    }]


}

)
const User=model("User",userSchema)
export default User;