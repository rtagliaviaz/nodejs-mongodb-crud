const { Router} = require('express');
const MovieModel = require('../models/MovieModel');

const router = Router();

//read
router.get('/movies', async (req, res) => {
  const movies = await MovieModel.find({});
  try {
    res.render('movies/all', {movies});
  } catch (err) {
    res.status(500).send(err);
  }
});

//new movie
router.get('/movies/add', (req, res) => {
  res.render('movies/new-movie');
});

//create
router.post('/movies/new-movie', async (req, res) => {
  const movies = new MovieModel(req.body);
  try {
    await movies.save();
    res.redirect('/movies');
  } catch (err) {
    res.status(500).send(err);
  }
});

//delete
router.delete('/movies/delete/:id', async (req, res) => {
  try {
    const movies = await MovieModel.findByIdAndDelete(req.params.id)
    res.redirect('/movies');
    if (!movies) res.status(404).send("No item found")
    res.status(200).send()
  } catch (err) {
    res.status(500).send(err)
  }
})

//update

router.get('/movies/edit/:id', async (req, res) => {
  const movie = await MovieModel.findById(req.params.id);
   res.render('movies/edit-movie', { movie });
});

router.put('/movies/edit-movie/:id', async(req, res) => {
  const movie = req.body
 try {
   await MovieModel.findByIdAndUpdate(req.params.id, movie);
   res.redirect('/movies');
 } catch (err) {
   res.status(500).send(err)
 }

});
module.exports = router