const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  score: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
    // validate(value) { 
    //   if (value < 0) throw new Error("Negative calories aren't real.");
    // }
});

const Movie = mongoose.model("movies", MovieSchema);
module.exports = Movie;