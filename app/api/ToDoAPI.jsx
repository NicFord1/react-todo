var $ = require('jquery');

module.exports = {
  filterToDos: function(toDos, showCompleted, searchText) {
    var filteredToDos = toDos;

    // Filter by showCompleted
    filteredToDos = filteredToDos.filter((toDo) => {
      return !toDo.completed || showCompleted;
    });

    // Filter by searchText
    filteredToDos = filteredToDos.filter((toDo) => {
      var text = toDo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText.toLowerCase()) >= 0;
    });

    // Sort toDos with Non-Completed First
    filteredToDos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredToDos;
  }
};
