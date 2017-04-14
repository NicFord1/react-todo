import expect from 'expect';

import ToDoAPI from 'app/api/ToDoAPI';

describe('ToDoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('toDos');
  });

  it('should exist', () => {
    expect(ToDoAPI).toExist();
  });

  describe('filterToDos', () => {
    var toDos = [{
      id: 1,
      text: 'some task',
      completed: true
    },{
      id: 2,
      text: 'some other task',
      completed: false
    },{
      id: 3,
      text: 'another task',
      completed: true
    }];

    it('should return all items if showCompleted is true', () => {
      var filteredToDos = ToDoAPI.filterToDos(toDos, true, '');
      expect(filteredToDos.length).toBe(3);
    });

    it('should return Non-Completed toDos if showCompleted is false', () => {
      var filteredToDos = ToDoAPI.filterToDos(toDos, false, '');
      expect(filteredToDos.length).toBe(1);
    });

    it('should sort by completed status', () => {
      var filteredToDos = ToDoAPI.filterToDos(toDos, true, '');
      expect(filteredToDos[0].completed).toBe(false);
    });

    it('should filter toDos by searchText', () => {
      var filteredToDos = ToDoAPI.filterToDos(toDos, true, 'some');
      expect(filteredToDos.length).toBe(2);
    });

    it('should return all toDos if searchText is empty', () => {
      var filteredToDos = ToDoAPI.filterToDos(toDos, true, '');
      expect(filteredToDos.length).toBe(3);
    });
  });
});
