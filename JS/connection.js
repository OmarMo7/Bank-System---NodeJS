
const mongoose = require('mongoose');

//Connecting to mongodb

mongoose.connect('mongodb+srv://Omar:bankdb7777@my-db.yeogs.mongodb.net/My-DB?retryWrites=true&w=majority');

mongoose.connection.once('open', function(){
  console.log('Connection has been successfully established!.. ');
}).on('error',function(error){
  console.log('Connection error!.. ',error);
})


