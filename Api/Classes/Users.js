const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(
    'mongodb://localhost/linkstasite'
);
const {UsersModel} = require('../Schema/Users.model');
class Users {
    constructor(){
        this.usersModel = UsersModel;
        return this;
    }
        
    getAllUsers() {
        return this.usersModel.find();
    }
    
    getUserById(id) {
        return this.usersModel.findOne({_id:id});
    }

    getUserByInstagramUserId(instagram_id) {
        return this.usersModel.find({'instagramUser.instagram_id':instagram_id});
    }
    
    addUser(instagramUser, stripeUser) {
        const newUser = new this.usersModel({
            instagramUser,
            stripeUser,
            last_updated : Date.now(),
        });
        return newUser
            .save();
    }
}

module.exports = Users;
