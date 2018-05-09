const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(
    'mongodb://localhost/linkstasite'
);
const {StripeUserModel} = require('../Schema/StripeUser.model');
class StripeUser {
    constructor(){
        this.usersModel = StripeUserModel;
        return this;
    }
        
    getAllUsers() {
        return this.usersModel.find();
    }
    
    getUserById(user_id) {
        return this.usersModel.findOne({user_id});
    }
    
    getUserByStripId(stripe_id) {
        return this.usersModel.findOne({stripe_id});
    }
    
    addUser(user_id, stripe_id) {
        const newUser = new this.usersModel({
            user_id,
            stripe_id,
            last_updated : Date.now(),
        });
        return newUser
            .save();
    }   
}

module.exports = StripeUser;