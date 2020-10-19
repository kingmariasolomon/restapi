var mongoose = require('mongoose');

// Genre Schema
var genreSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    crerate_date: {
        type: Date,
        default: Date.now
    }
});

var Genre = module.exports = mongoose.model('Genre', genreSchema);

// Get genres
module.exports.getGenres = function(callback, limit){
    Genre.find(callback).limit(limit);
}

// Add genres
module.exports.addGenre = function(genre, callback){
    Genre.create(genre, callback);
}

// Update genre
module.exports.updateGenre = function(id, genre, options, callback){
    var query = {_id: id};
    var update = {
        name: genre.name
    }
    Genre.findOneAndUpdate(query, update, options, callback);
}

// Delete genre
module.exports.removeGenre = function(id, callback){
    var query = {_id: id};
    Genre.remove(query, callback);
}