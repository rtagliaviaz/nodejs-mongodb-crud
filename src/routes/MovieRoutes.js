const express = require('express');
const MovieModel = require('../models/MovieModel');

const app = express();

//read
app.get('/movies', async (req, res) => {
  const movies = await MovieModel.find({});

  try {
    res.send(movies);
  } catch (err) {
    res.status(500).send(err);
  }
});

//create
app.post('/movies', async (req, res) => {
  const movies = new MovieModel(req.body);

  try {
    await movies.save();
    res.send(movies);
  } catch (err) {
    res.status(500).send(err);
  }
});

//delete
app.delete('/movies/:id', async (req, res) => {
  try {
    const movies = await MovieModel.findByIdAndDelete(req.params.id)

    if (!movies) res.status(404).send("No item found")
    res.status(200).send()
  } catch (err) {
    res.status(500).send(err)
  }
})

//update
app.put('/movies/:id', async(req, res) => {
  const movies = await MovieModel.find({});
 try {
   await MovieModel.findByIdAndUpdate(req.params.id, req.body);
   await MovieModel.save();
   res.send(movies);
 } catch (err) {
   res.status(500).send(err)
 }

});
module.exports = app