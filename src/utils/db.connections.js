// import mongose
const mongoose = require('mongoose');


// connecting database
const connect = () => {
    console.log('Initializng Database Connection');
    mongoose.connect("mongodb+srv://sanjoysarkar:abcd1234@99acres.mmqufxg.mongodb.net/99acres")
     .then(() => {
        console.log('Database Connected Successfully');
     })
     .catch((err) => {
        console.log('Error while connecting database',err);
     })
}


//exporting connect function
module.exports = { connect }