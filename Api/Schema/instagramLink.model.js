const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const InstagramLinksSchema = Schema({
    user_id : { type : Schema.Types.ObjectId, ref : 'LinkstasiteUser'},
    /* link information from instagram */
    link_id : { type : Number, required: true},
    created : { type : Date, default : Date.now, required : true},
    last_updated : { type : Date, default : Date.now },
});

const InstagramLinksModel = mongoose.model('InstagramLinks', InstagramLinksSchema);

module.exports = { InstagramLinksSchema, InstagramLinksModel };
