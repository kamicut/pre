/* globals Meteor, Documents, Template, Mongo */

Documents = new Mongo.Collection('Documents');
if (Meteor.isClient) {

  if (Documents.find().count() === 0) {
    Documents.insert({docid: "1"});
  }

  Template.body.helpers({
    docid: Documents.findOne().docid
  });
}
