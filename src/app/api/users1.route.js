const express = require('express');  
const app = express();  
const loginRoutes = express.Router();  
// Require Product model in our routes module  
let Login = require('./login');  
// Defined store route  
loginRoutes.route('/add').post(function (req, res) {  
  let login = new Login(req.body); 
  console.log("save called") 
  login.save()  
    .then(login => {  
      res.status(200).json({'Login': 'Login users has been added successfully'});  
    })  
    .catch(err => {  
    res.status(400).send("unable to save to database");  
    });  
});

module.exports = loginRoutes;  