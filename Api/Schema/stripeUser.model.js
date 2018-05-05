const mongoose = require('mongoose');
const Scheme = mongoose.Schema;
const StripeUserSchema = Scheme({
    user_id : { type: Schema.Types.ObjectId, ref: 'LinkstasiteUser'},
    stripe_id : {type:Number, require:true, unique:true},//not sure if this is correct TODO :: Ask Ismail
    created : { type: Date, default: Date.now, required:true},
    last_updated : { type: Date, default: Date.now },
});
const StripeUserModel= mongoose.model('StripeUser', StripeUserSchema);
module.exports = {StripeUserSchema, StripeUserModel};