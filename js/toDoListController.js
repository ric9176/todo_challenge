toDoList.controller('ToDoListController', [function(){
  var self = this;

  self.taskList = [];

  self.addTask = function(){

    if(self.task === "") {
      return null;
    } else {
      self.taskList.push({taskName: self.task, completed: false});
      self.task = "";
    }
  };

  self.taskDone = function(tasknumber){
    self.taskList[tasknumber].completed = !self.taskList[tasknumber].completed;
  };

  self.deleteTask = function(tasknumber){
    self.taskList.splice(tasknumber, 1);
  };

  self.clearCompleted = function() {

   for (i = 0; i < self.taskList.length; i += 1) {
     if(self.taskList[i].completed === true) {
       self.taskList.splice(i, 1);
       i-=1;
     }
   }
 };

}]);
