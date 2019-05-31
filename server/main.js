import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';
import '../imports/api/users';
import '../startup/simple-schema-configuration.js';

Meteor.startup(() => {

  let now = new Date();
  
  WebApp.connectHandlers.use((req, res, next) => {
    next();
  });
  
  Accounts.validateNewUser((user) => {
    const email = user.emails[0].address;
    try {
      new SimpleSchema({
        email: {
          type: String,
          regEx: SimpleSchema.RegEx.Email
        }
      }).validate({ email });
    } catch (e) {
      throw new Meteor.Error(400, e.message)
    }
    return true;
  });

});
