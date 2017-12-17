var mongoose=require('mongoose');

//genre schema

var genreSchema = mongoose.Schema({
    name:{
        type:string,
        required:true
    },
    create_date:{
        type:Date,
        default:Date.now
    }
});

var genre = model.exports=mongoose.model('Genre',genreSchema);