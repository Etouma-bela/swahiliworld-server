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
    category: {
      type: String,
      enum: ["song", "tales", "education"],
    },
    likes: [{ type: Schema.Types.ObjectId, ref: "Like" }],
  },
  { timestamps: true }
);

const VideoModel = mongoose.model("Video", videoSchema);
module.exports = VideoModel;
