import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import React from 'react';
import { AppRouter, history, onAuthChange } from '../imports/routes/AppRouter';
import '../startup/simple-schema-configuration.js';
import { Session } from 'meteor/session';

Meteor.startup(() => {
  ReactDOM.render(<AppRouter />, document.getElementById('app'));
});


