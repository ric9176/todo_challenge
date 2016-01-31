describe('ToDoListController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('ToDoListController');
  }));


  it('initialises with an empty array', function(){
    expect(ctrl.taskList).toEqual([])

  });


  it('is able to add a task and store it in the list', function(){
    ctrl.task = "clean room";
    ctrl.addTask();
    expect(ctrl.taskList[0].taskName).toEqual("clean room")
  });

  it('is able to mark tasks as completed', function(){
    ctrl.task = "clean room";
    ctrl.addTask();
    ctrl.taskDone(0);
    expect(ctrl.taskList[0].completed).toEqual(true)
  });

  describe('Deleting a task', function(){
    it('is able to remove a task from the list', function(){
      ctrl.task = "clean room";
      ctrl.addTask();
      ctrl.deleteTask(0);
      expect(ctrl.taskList[0]).toBeUndefined();
    });
  });

  describe('Clearing the To Do List of completed tasks', function(){
    it('clears completed tasks', function(){
      ctrl.task = "learn angular";
      ctrl.addTask();
      ctrl.taskDone(0);
      expect(ctrl.taskList[0].taskName).toEqual("learn angular");
      ctrl.clearCompleted();
      ctrl.task = "do tdd"
      ctrl.addTask();
      expect(ctrl.taskList[0].taskName).toEqual("do tdd");
      // expect(ctrl.taskList[0]).taskName).not.toEqual("use TDD")
    });
  });

});
