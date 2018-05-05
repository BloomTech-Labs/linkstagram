const mongoose = require('mongoose');
const Scheme = mongoose.Schema;
const InstagramLinkSchema = Scheme({
    user_id : { type : Schema.Types.ObjectId, ref : 'LinkstasiteUser'},
    /* link information from instagram */
    created : { type : Date, default : Date.now, required : true},
    last_updated : { type : Date, default : Date.now },
});
const AssociatedLinksModel= mongoose.model('AssociatedLinks', AssociatedLinksSchema);
module.exports = {AssociatedLinksSchema, AssociatedLinksModel};