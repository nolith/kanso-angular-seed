var couchtypes = require('couchtypes/types'),
    types = require('./types');

module.exports = function (newDoc, oldDoc, userCtx) {
  couchtypes.validate_doc_update(types, newDoc, oldDoc, userCtx);
};