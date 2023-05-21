const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/UITOUX',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once("open", function(){
    console.log("Mongodb database connection established sucessfully");
})