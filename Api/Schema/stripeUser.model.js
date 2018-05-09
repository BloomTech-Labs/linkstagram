const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StripeUserSchema = Schema({
    user_id : { type: Schema.Types.ObjectId, ref: 'LinkstasiteUser'},
    stripe_id : {type:String, require:true, unique:true}, //not sure if this is correct TODO :: Ask Ismail
    created : { type: Date, default: Date.now, required:true},
    last_updated : { type: Date, default: Date.now },
}, {_id:false});
const StripeUserModel= mongoose.model('StripeUser', StripeUserSchema);
module.exports = {StripeUserSchema, StripeUserModel};