const dboperations = require('./dboperations');
var Db = require('./dboperations');
var Order = require('./order');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


router.use((request,response,next) => {
    console.log('middleware');
    next();
});

router.route('/user').get((request,response) => {
    dboperations.getOrders().then(result => {
         // console.log(result);
         response.json(result);
    });
});

router.route('/user').post((request,response) => {

    let order = {...request.body}

    dboperations.addOrder(order).then(result => {
         // console.log(result);
         response.status(201).json(result);
    });
});

var port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is running at ' + port);




