const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      require: true,
    },
    vocabulary: {
      type: String,
      require: true,
    },
    likes: [{ type: Schema.Types.ObjectId, ref: "Like" }],

    category: {
      type: String,
      enum: ["song", "tales", "education"],
    },
  },
  { timestamps: true }
);

const VideoModel = mongoose.model("Video", videoSchema);
module.exports = VideoModel;
