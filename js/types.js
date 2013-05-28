var Type = require('couchtypes/types').Type,
    fields = require('couchtypes/fields');


exports.todo = new Type('todo', {
  fields: {
    text: fields.string(),
    done: fields.boolean()
  }
});