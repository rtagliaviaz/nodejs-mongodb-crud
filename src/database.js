const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://testuser:test123456@cluster0-6ogtf.mongodb.net/test?retryWrites=true&w=majority', {
  dbName: 'data',
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
.then(db => console.log('DB is connected'))
.catch(err => console.error(err));
