const mongoose = require("mongoose");

const AtlasDB = "mongodb+srv://UmeshGayashan:Umesh@123@cluster0.c6vqxwa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(AtlasDB, {
}).then(() => {
  console.log("Connected to database");
}).catch((e) => {
  console.log(e);
});

module.exports = mongoose;
