import {Schema,model} from 'mongoose';

const ReviewSchema=({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    homestay:{
        type:Schema.Types.ObjectId,
        ref:'HomeStay'
    },
    rating:{
        type:Number,
        required:true
    },
    comments:{
        type:String,
        required:True
    }
}
)
const Review=model('Review',ReviewSchema)
export default Review;