var express = require('express');
var cors = require('cors'); // We will use CORS to enable cross origin domain requests.
var mongoose = require('mongoose');





// var Model = mongoose.model('Model', schemaName);
// mongoose.connect('mongodb://localhost:27017/dbName');

// var port = process.env.PORT || 8080;
// app.listen(port, function() {
//     console.log('Node.js listening on port ' + port);
// });

// app.get('/exercises', cors(), function(req, res) {
//     var query = req.params.query;

//     Model.find({
//         'request': query
//     }, function(err, result) {
//         if (err) throw err;
//         if (result) {
//             res.json(result)
//         } else {
//             res.send(JSON.stringify({
//                 error : 'Error'
//             }))
//         }
//     })
// })