const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(
    'mongodb://localhost/linkstasite'
);
const {InstagramUserModel} = require('../Schema/InstagramUser.model');
class InstagramUser {
    constructor(){
        this.usersModel = InstagramUserModel;
        return this;
    }
        
    getAllUsers() {
        return this.usersModel.find();
    }
        
    getUserByInstagramId(instagram_id) {
        return this.usersModel.findOne({instagram_id});
    }
    
    addUser(instagram_id) {
        const newUser = new this.usersModel({
            instagram_id,
            last_updated : Date.now(),
        });
        return newUser
            .save();
    }    
}

module.exports = InstagramUser;