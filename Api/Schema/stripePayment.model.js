const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StripePaymentSchema = Schema({
    user_id : { type : Schema.Types.ObjectId, ref : 'LinkstasiteUser'},
    stripe_user_id : { type : Schema.Types.ObjectId, ref : 'StripeUser'},
    stripe_charge_id : { type : String, required : true },
    created : { type : Date, default : Date.now, required : true }
}, {_id : false });
const StripePaymentModel= mongoose.model('StripePayment', StripePaymentSchema);

module.exports = {StripePaymentSchema, StripePaymentModel};
