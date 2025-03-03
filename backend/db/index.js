const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('DB Connected!'))
  .catch(e => {
    console.log(e);
  });

module.exports = mongoose;
