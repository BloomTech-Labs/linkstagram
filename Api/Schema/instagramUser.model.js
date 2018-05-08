const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const InstagramUserSchema = Schema({
    instagram_id : {type:Number, require:true, unique:true},
    created : { type: Date, default: Date.now, required:true},
    last_updated : { type: Date, default: Date.now },
}, { _id : false });
const InstagramUserModel= mongoose.model('InstagramUser', InstagramUserSchema);
module.exports = {InstagramUserSchema, InstagramUserModel};