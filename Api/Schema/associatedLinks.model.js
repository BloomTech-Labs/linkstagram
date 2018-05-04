const mongoose = require('mongoose');
const { InstagramLinkSchema } = require('./instagramLink.model');
const Scheme = mongoose.Schema;
const AssociatedLinksSchema = Scheme({
    user_id : { type : Schema.Types.ObjectId, ref : 'LinkstasiteUser'},
    instagram_links : InstagramLinkSchema,
    affiliate_url : { type : String, required : true },
    created : { type : Date, default : Date.now, required : true},
    last_updated : { type : Date, default : Date.now },
});
const AssociatedLinksModel= mongoose.model('AssociatedLinks', AssociatedLinksSchema);
module.exports = {AssociatedLinksSchema, AssociatedLinksModel};