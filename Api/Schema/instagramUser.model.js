const mongoose = require('mongoose');
const Scheme = mongoose.Schema;
const InstagramUserSchema = Scheme({
    user_id : { type: Schema.Types.ObjectId, ref: 'LinkstasiteUser'},
    instagram_id : {type:Number, require:true, unique:true},
    username : {type:Number, require:true, unique:true},
    full_name : String,
    profile_picture : String,
    created : { type: Date, default: Date.now, required:true},
    last_updated : { type: Date, default: Date.now },
});
const InstagramUserModel= mongoose.model('InstagramUser', InstagramUserSchema);
module.exports = {InstagramUserSchema, InstagramUserModel};