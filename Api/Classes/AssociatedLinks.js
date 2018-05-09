const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(
    'mongodb://localhost/linkstasite'
);
const {AssociatedLinksModel} = require('../Schema/AssociatedLinks.model');
class AssociatedLinks {
    constructor(){
        this.linksModel = AssociatedLinksModel;
        return this;
    }
        
    getAllAssociatedLinks() {
        return this.linksModel.find();
    }
    
    getAssociatedLinkById(id) {
        return this.linksModel.findOne({_id:id});
    }
    
    getAssociatedLinksByUserId(user_id) { 
        return this.linksModel.find({user_id});
    }

    addAssociatedLink(user_id, instagram_links, affiliate_url) {
        const newAssociatedLink = new this.linksModel({
            user_id,
            instagram_links,
            affiliate_url,
            last_updated : Date.now(),
        });
        return newAssociatedLink
            .save();
    }
}

module.exports = AssociatedLinks;