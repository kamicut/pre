/* globals Meteor, Documents, Template, Mongo */

Documents = new Mongo.Collection('Documents');
if (Meteor.isClient) {

  var $editor, $rendered = {};
  if (Documents.find().count() === 0) {
    Documents.insert({docid: "1"});
  }
  Meteor.startup(function () {
    $editor = document.getElementById('editor');
    $rendered = document.getElementById('rendered');

    $rendered.innerHTML = marked($editor.value);
  })

  Template.body.helpers({
    docid: Documents.findOne().docid
  });

  Template.body.events({
    'keyup textarea': function (event) {
      var textValue = $editor.value;
      $rendered.innerHTML = marked(textValue);
    }
  });
}
