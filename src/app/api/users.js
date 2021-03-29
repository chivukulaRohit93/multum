const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  
// Define collection and schema for Product  
let Users = new Schema({  
  firstName: {  
    type: String  
  },  
  lastName: {  
    type: String  
  },  
  email: {  
    type: String  
  },
  password: {  
    type: String  
  },
  confirmPassword: {  
    type: String  
  },
  phone: {  
    type: Number  
  },
  dateofbirth: {  
    type: Number  
  },
  zipcode: {  
    type: Number  
  }    
},{  
    collection: 'Users'  
});  
module.exports = mongoose.model('Users', Users); 