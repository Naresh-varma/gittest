const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    _id : mongoose.Schema.Types.ObjectId,
    title : {
        type : String,
        required : true,
        unique : true
    },
    description : String,
    comments : [{type : mongoose.Schema.Types.ObjectId, ref: 'Comment', unique : true}]
});
module.exports = mongoose.model('Blog', blogSchema);