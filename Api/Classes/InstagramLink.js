const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(
    'mongodb://localhost/linkstasite'
);
const {InstagramLinksModel} = require('../Schema/InstagramLink.model');
class InstagramLink {
    constructor(){
        this.linkModel = InstagramLinksModel;
        return this;
    }
        
    getAllInstagramLinks() {
        return this.linkModel.find();
    }
    
    getInstagramLinkById(id) {
        return this.linkModel.findOne({_id:id});
    }

    getInstagramLinkByLinkId(link_id) {
        return this.linkModel.findOne({link_id});
    }

    getInstagramLinksByUserId(user_id) {
        return this.linkModel.find({user_id});
    }

    addInstagramLink(user_id, link_id) {
        const newLink = new this.linkModel({
            user_id,
            link_id,
            last_updated : Date.now(),
        });
        return newLink
            .save();
    }
}

module.exports = InstagramLink;
