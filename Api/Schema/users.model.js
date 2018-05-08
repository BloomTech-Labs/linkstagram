const mongoose = require('mongoose');
const { InstagramUserSchema } = require('./InstagramUser.model');
const { StripeUserSchema } = require('./StripeUser.model');
const { AssociatedLinksSchema } = require('./AssociatedLinks.model');
const { PaymentsSchema } = require('./Payments.model');
const Scheme = mongoose.Schema;
const UsersSchema = Scheme({
    instagramUser : InstagramUserSchema,
    stripeUser : StripeUserSchema,
    created : { type: Date, default: Date.now, required:true},
    last_updated : { type: Date, default: Date.now },
});

const UsersModel= mongoose.model('LinkstasiteUser', UsersSchema);

module.exports = {UsersSchema, UsersModel};
