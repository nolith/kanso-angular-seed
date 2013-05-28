var forms = require('couchtypes/forms'),
    utils = require('couchtypes/utils'),
    types = require('./types');


exports.add_blogpost = function (doc, req) {
  var form = new forms.Form(types.blogpost, null, {
    exclude: ['created', 'comments']
  });

  // parse the request data and check validation and permission functions
  form.validate(req);

  if (form.isValid()) {
    // the form is valid, save the document and redirect to the new page
    return [form.values, utils.redirect(req, '/' + form.values._id)];
  }
  else {
    // the form is not valid, so render it again with error messages
    var content = templates.render('blogpost_form.html', req, {
      form_title: 'Add new blogpost',
      form: form.toHTML(req)
    });
    // return null as the first argument so the document isn't saved
    return [null, {content: content, title: 'Add new blogpost'}];
  }
};

function jsonAnswer(statusCode, obj) {
  return { code: statusCode, json: obj };
}

exports.toggle = function(doc,req) {
  if(doc && doc.type === 'todo') {
    doc.done = !doc.done;
    return[doc, jsonAnswer(200, doc)];
  }else {
    return[null, jsonAnswer(404, {reason: "not found"})];
  }
};