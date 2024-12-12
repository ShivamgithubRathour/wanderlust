const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlustmodify";
main()
  .then(() => {
    console.log("Connected to DB");
    return initDB();
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
  ...obj,
  owner: "67556e8b411898cde835fba6",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};
initDB();