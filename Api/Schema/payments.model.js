const mongoose = require('mongoose');
const { StripePaymentSchema } = require('./StripePayment.model');
const Schema = mongoose.Schema;
const PaymentsSchema = Schema({
    user_id : { type : Schema.Types.ObjectId, ref : 'LinkstasiteUser'},
    stripe_user_id : { type : Schema.Types.ObjectId, ref : 'StripeUser'},
    monthly_payments:[StripePaymentSchema],
    subscription_starts : { type : Date, default : Date.now , required : true },
    subscription_end : { type : Date, default : Date.now + '1 month', required : true },
    created : { type : Date, default : Date.now, required : true },
    last_updated : { type : Date, default : Date.now },
}, {_id:false});
const PaymentsModel= mongoose.model('PaymentProfile', PaymentsSchema);
module.exports = {PaymentsSchema, PaymentsModel};