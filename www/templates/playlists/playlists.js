angular.module('starter.playlists')

  .controller('PlaylistsCtrl', function($scope,TodosService) {
    var todos = TodosService.getTodos();
    $scope.todos = todos
  })
