const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    Name:{
        type: String,
        require:true
    },
    Price: {
        type: String,
        require: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Posts', PostSchema);