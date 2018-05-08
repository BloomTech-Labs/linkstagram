const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(
    'mongodb://localhost/linkstasite'
);
const {PaymentsModel} = require('../Schema/Payments.model');
class PaymentProfiles {
    constructor(){
        this.paymentsModel = PaymentsModel;
        return this;
    }
        
    getAllPaymentProfiles() {
        return this.paymentsModel.find();
    }
    
    getPaymentProfileByUserId(user_id) {
        return this.paymentsModel.findOne({user_id});
    }
    
    getPaymentProfileByStripeUserId(stripe_user_id) {
        return this.paymentsModel.findOne({stripe_user_id});        
    }

    addPaymentProfile(user_id, stripe_user_id, monthly_payments, subscription_starts, subscription_end) {
        const newPaymentProfile = new this.paymentsModel({
            user_id,
            stripe_user_id,
            monthly_payments,
            subscription_starts,
            subscription_end,
            last_updated : Date.now(),
        });
        return newPaymentProfile
            .save();
    }
}

module.exports = PaymentProfiles;
