const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  
// Define collection and schema for Product  
let Login = new Schema({    
  username: {  
    type: String  
  },  
  Password: {  
    type: String  
  }    
},{  
    collection: 'Login'  
});  
module.exports = mongoose.model('Login', Login); 