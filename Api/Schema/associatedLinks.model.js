const mongoose = require('mongoose');
const { InstagramLinksSchema } = require('./instagramLink.model');
const Schema = mongoose.Schema;
const AssociatedLinksSchema = Schema({
    user_id : { type : Schema.Types.ObjectId, ref : 'LinkstasiteUser'},
    instagram_links : InstagramLinksSchema,
    affiliate_url : { type : String, required : true },
    created : { type : Date, default : Date.now, required : true},
    last_updated : { type : Date, default : Date.now },
});
const AssociatedLinksModel= mongoose.model('AssociatedLinks', AssociatedLinksSchema);
module.exports = {AssociatedLinksSchema, AssociatedLinksModel};