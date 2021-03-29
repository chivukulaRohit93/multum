const express = require('express');  
const app = express();  
const usersRoutes = express.Router();  
// Require Product model in our routes module  
let Users = require('./users');  
// Defined store route  
usersRoutes.route('/add').post(function (req, res) {  
  let users = new Users(req.body); 
  console.log("save called") 
  users.save()  
    .then(users => {  
      res.status(200).json({'Users': 'Users has been added successfully'});  
    })  
    .catch(err => {  
    res.status(400).send("unable to save to database");  
    });  
});

module.exports = usersRoutes;  