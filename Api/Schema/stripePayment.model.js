const mongoose = require('mongoose');
const Scheme = mongoose.Schema;
const StripePaymentSchema = Scheme({
    user_id : { type : Schema.Types.ObjectId, ref : 'LinkstasiteUser'},
    stripe_user_id : { type : Schema.Types.ObjectId, ref : 'StripeUser'},
    /* add payment details here */
    created : { type : Date, default : Date.now, required : true },
    last_updated : { type : Date, default : Date.now },
});
const StripePaymentModel= mongoose.model('StripePayment', StripePaymentSchema);
module.exports = {StripePaymentSchema, StripePaymentModel};