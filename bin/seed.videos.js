require("dotenv").config();
require("../config/dbConnection");
const VideoModel = require("../models/Video");
const mongoose = require("mongoose");

const videos = [
  {
    title: "Baby Shark (Swahili)",
    videoUrl: "https://www.youtube.com/embed/2sDUn4KIq6Y",
    description: "Dance to the peppy and groovy music of Baby Shark in Swahili",
    vocabulary: "Kiswahili: The swahili language, Papa: Shark",
    category: "song",
    likes: [],
  },
  {
    title: "Akili and Me",
    videoUrl: "https://www.youtube.com/embed/DjmLoxkeMPg",
    description:
      "Learn Swahili and English with Akili and Me. Bilingual Learning for Preschoolers",
    vocabulary: "Yai: Egg, Samaki: Fish",
    category: "education",
    likes: [],
  },
  {
    title: "Mrukaji",
    videoUrl: "https://www.youtube.com/embed/Z9MVwspsq2o",
    description: "Idhaa ya Hadithi za Kiswahili",
    vocabulary: "Mnyama: Animal, Wazo: Idea",
    category: "tales",
    likes: [],
  },
];

//empty database
VideoModel.deleteMany()
  .then(async () => {
    //insert videos in db
    await VideoModel.insertMany(videos);
    console.log("Videos inserted");
  })
  .catch((err) => {
    console.log(err);
  });
