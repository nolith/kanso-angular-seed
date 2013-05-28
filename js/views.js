module.exports = {
  todos: {
    map: function(doc) {
      if(doc.type === 'todo') {
        emit(doc.done, doc);
      }
    }
  }
}