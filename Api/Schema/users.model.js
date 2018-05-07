const mongoose = require('mongoose');
const { InstagramUserSchema } = require('./instagramUser.model');
const { StripeUserSchema } = require('./stripeUser.model');
const { AssociatedLinksSchema } = require('./associatedLinks.model');
const { PaymentsSchema } = require('./payments.model');
const Scheme = mongoose.Schema;
const UsersSchema = Scheme({
    instagramUser : InstagramUserSchema,
    stripeUser : StripeUserSchema,
    associateLinks : [AssociatedLinksSchema],
    payments : PaymentsSchema,
    created : { type: Date, default: Date.now, required:true},
    last_updated : { type: Date, default: Date.now },
});
const UsersModel= mongoose.model('LinkstasiteUser', UsersSchema);
module.exports = {UsersSchema, UsersModel};