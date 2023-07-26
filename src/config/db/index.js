const mongoose = require('mongoose');

async function connect(){

    try{

        await mongoose.connect('mongodb://0.0.0.0:27017/test_nodejs_dev'
        ,{
            useNewUrlParser: true, useUnifiedTopology: true 
        }
        );
        console.log('Connect successfully!!');
    }catch(err){
        console.log('connect faled ', err);
    }

}

module.exports = { connect };