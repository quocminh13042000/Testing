var mongodb = require('mongodb')

var connected = false;
var dbo = null;
var data = [];

mongodb.MongoClient.connect('mongodb+srv://Quoc:abc*123456@cluster0.pg8cr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useUnifiedTopology: true
}).then(connection => {
    connected = true;
    dbo = connection.db('Task');
    console.log("DB Conection successful");
    dbo.collection('Task_2').find({}).toArray(function(err, result) {
        if (err) {
            throw err;
        } else {
            console.log(result);
            data = result;
        }
    });
}).catch(error => {
    console.log("Error in connecting to DB");
});

return data;