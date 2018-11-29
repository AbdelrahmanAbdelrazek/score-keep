import { Players } from '../imports/api';
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    console.log(Players.find().fetch());
})