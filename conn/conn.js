const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://krishnavamsireddyduggireddy:BkYLIO2aGQJAGNX4@cluster0.ubmngti.mongodb.net/"
      )
      .then(() => {
        console.log("Connected");
      });
  } catch (error) {
    console.log(error);
  }
};
conn();
