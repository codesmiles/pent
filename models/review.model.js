const {mongoose} = require(`../config/mongooseConfig`);
const { v4: uuidv4 } = require("uuid");

const reviewSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
      default: uuidv4().split("-").join(""),
    },
    userId:{
        type:String,
        required:true,
        ref:"user",
    },
    title:{
        type:String,
        required:true,
    },
    houseLocation:{
        type:String,
        required:true
    },
    description:{
        type:string,
        requiered:true
    },
    isReviewHelpful:{
        type:Number,
        required:true,
        default:0,
    }
  },
  {
    timestamps: true,
  }
);

const review = mongoose.model("post", reviewSchema);
module.exports = review;