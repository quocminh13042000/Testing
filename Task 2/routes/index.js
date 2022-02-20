var express = require('express');
const async = require('hbs/lib/async');
var router = express.Router();
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
            data = result;
        }
    });
}).catch(error => {
    console.log("Error in connecting to DB");
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json(data)
});

router.get('/:Name', function(req, res, next) {
    var name = req.params.Name.toLowerCase();
    dbo.collection('Task_2').find({}).toArray(function(err, result) {
        if (err) {
            throw err;
        } else {
            data = result;
        }
    });
    console.log(name)
    var find = data.filter((o) => o.username.toLowerCase().includes(name) != false || o.email.toLowerCase().includes(name) != false)
    res.json(find)
});

router.post('/update', async function(req, res, next) {
    var updateDB = req.body;
    console.log(req.body)
    await dbo.collection('Task_2').updateOne({
            _id: req.body._id
        }, {
            $set: {
                email: req.body.email,
                birthdate: req.body.birthdate,
                username: req.body.username
            }

        },
        function(err, res) {
            if (err) throw err;
            console.log("1 document updated");
        });


})


module.exports = router;