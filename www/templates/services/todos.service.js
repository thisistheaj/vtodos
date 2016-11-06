angular.module('starter.service', [])

  .factory('TodosService', function () {
    var service = {
      getTodos: getTodos,
    }

    var todos = [
      {title: "todo1"},
      {title: "todo2"},
      {title: "todo3"},
      {title: "todo4"},
    ]


    function getTodos() {
      return todos;
    }

    function requestTodos() {

    }
    return service;
  })
