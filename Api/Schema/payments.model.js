const mongoose = require('mongoose');
const { StripePaymentSchema } = require('./stripePayment.model');
const Scheme = mongoose.Schema;
const PaymentsSchema = Scheme({
    user_id : { type : Schema.Types.ObjectId, ref : 'LinkstasiteUser'},
    stripe_user_id : { type : Schema.Types.ObjectId, ref : 'StripeUser'},
    payments:[StripePayment],
    subscription_starts : { type : Date, default : Date.now , required : true },
    subscription_end : { type : Date, default : Date.now + '1 month', required : true },
    created : { type : Date, default : Date.now, required : true },
    last_updated : { type : Date, default : Date.now },
});
const PaymentsModel= mongoose.model('StripeUser', PaymentsSchema);
module.exports = {PaymentsSchema, PaymentsModel};