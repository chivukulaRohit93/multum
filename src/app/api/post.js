const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  
// Define collection and schema for Product  
let Users = new Schema({  
    jobtitle: {  
    type: String  
  },  
  dateneedstoknow: {  
    type: Number 
  },  
  timeneedstobedone: {  
    type: Number 
  },
  pickup: {  
    type: String  
  },
  pickup1: {  
    type: String  
  },
  pickupaddress: {  
    type: String  
  },
  pickupaddress1: {  
    type: String  
  },
  pickupaddress2: {  
    type: String  
  },
  pickupaddress3: {  
    type: String  
  },
  pickupaddress4: {  
    type: String  
  },
  dropoffaddress: {  
    type: String  
  },
  dropoffaddress1: {  
    type: String 
  },
  dropoffaddress2: {  
    type: String 
  },
  dropoffaddress3: {  
    type: String 
  },
  dropoffaddress4: {  
    type: String 
  },
  chooseprice: {  
    type: Number  
  },
  cardnumber: {  
    type: Number  
  },
  cvv: {  
    type: Number  
  }, 
  cardexpiry: {  
    type: Number  
  }   
},{  
    collection: 'Post'  
});  
module.exports = mongoose.model('Post', Post); 