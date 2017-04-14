import expect from 'expect';

import ToDoAPI from 'app/api/ToDoAPI';

describe('ToDoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('toDos');
  });

  it('should exist', () => {
    expect(ToDoAPI).toExist();
  });

  describe('setToDos', () => {
    it('should set valid toDos array', () => {
      var toDos = [{
        id: 23,
        test: 'test all files',
        completed: false
      }];
      ToDoAPI.setToDos(toDos);

      var actualToDos = JSON.parse(localStorage.getItem('toDos'));
      expect(actualToDos).toEqual(toDos);
    });

    it('should not set invalid toDos array', () => {
      var badToDos = {a: 'b'};
      ToDoAPI.setToDos(badToDos);

      expect(localStorage.getItem('toDos')).toBe(null);
    });
  });

  describe('getToDos', () => {
    it('should return empty array for bad localStorage data', () => {
      var actualToDos = ToDoAPI.getToDos();

      expect(actualToDos).toEqual([]);
    });

    it('should return toDos array if valid array in localStorage', () => {
      var toDos = [{
        id: 23,
        test: 'test all files',
        completed: false
      }];

      localStorage.setItem('toDos', JSON.stringify(toDos));
      var actualToDos = ToDoAPI.getToDos();

      expect(actualToDos).toEqual(toDos);
    });
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
