toDoList.controller('ToDoListController', [function(){
  var self = this;

  self.taskList = []

  self.addTask = function(){
    self.taskList.push({taskName: self.task, completed: false})
  };

  self.taskDone = function(tasknumber){
    self.taskList[tasknumber].completed = !self.taskList[tasknumber].completed
  };

  self.deleteTask = function(tasknumber){
    self.taskList.splice(tasknumber, 1);
  };

  self.clearList = function() {
    self.taskList = [];
  };

}]);
