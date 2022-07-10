// const mongoose = require('mongoose');
//  mongoose.connect('mongodb://localhost:27017/library');
// const Schema = mongoose.Schema;

// const BookSchema = new Schema({
//     title : String,
//     author : String,
//     genre : String,
//     image : String
// });

// var Bookdata = mongoose.model('bookdata',BookSchema);

// module.exports = Bookdata; 
// ----------------------------------------

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');

var BookSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    genre : String,
    image : String

})

var Bookdata = mongoose.model('bookdata',BookSchema);

module.exports = Bookdata;