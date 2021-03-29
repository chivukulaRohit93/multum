const express = require('express');  
const app = express();  
const postRoutes = express.Router();  
// Require Product model in our routes module  
let Post = require('./post');  
// Defined store route  
postRoutes.route('/add').post(function (req, res) {  
  let post = new Post(req.body); 
  console.log("save called") 
  post.save()  
    .then(users => {  
      res.status(200).json({'Post': 'Users has been added successfully'});  
    })  
    .catch(err => {  
    res.status(400).send("unable to save to database");  
    });  
});

module.exports = postRoutes;  