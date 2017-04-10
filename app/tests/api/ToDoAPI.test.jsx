var expect = require('expect');

var ToDoAPI = require('ToDoAPI');

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
});
