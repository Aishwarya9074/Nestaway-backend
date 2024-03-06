import { Schema, model } from "mongoose";

const HomestaySchema =
  ({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    amenities: [String],
    image: {
      type: String,
    //   trim: true,
    //   required: true,
    },
    host: {
      type: Schema.Types.ObjectId,
      ref: "Host",
    },
  }
 
  );
const HomeStay = model("HomeStay", HomestaySchema);
export default HomeStay;
