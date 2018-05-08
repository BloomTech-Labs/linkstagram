const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(
    'mongodb://localhost/linkstasite'
);
const {StripePaymentModel} = require('../Schema/StripePayment.model');
class StripePayment {
    constructor(){
        this.StripePaymentModel = StripePaymentModel; 
        return this;
    }
        
    getAllStripePayment() {
        return this.StripePaymentModel.find();
    }
    
    
    getStripePaymentsByUserId(user_id) {
        return this.StripePaymentModel.find({user_id});
    }
    
    
    getStripePaymentsByStripeUserId(stripe_user_id) {
        return this.StripePaymentModel.find({stripe_user_id});
    }
    
    getStripePaymentByStripeChargeId(stripe_charge_id) {
        return this.StripePaymentModel.findOne({stripe_charge_id});
    }    

    addStripePayment(user_id, stripe_user_id, stripe_charge_id) {
        const newStripePayment = new this.StripePaymentModel({
            user_id,
            stripe_user_id,
            stripe_charge_id,
        });
        return newStripePayment
            .save();
    }
}

module.exports = StripePayment;
