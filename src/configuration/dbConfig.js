const mongoose = require("mongoose")

const AtlasDB = "mongodb+srv://umeshgayashan099:Password@testing.drry1nw.mongodb.net/?retryWrites=true&w=majority&appName=Testing";


mongoose.connect(AtlasDB, {
  }).then(() => {
    console.log("Connected to database");
  }).catch((e) => {
    console.log(e);
  });

  module.exports = mongoose;