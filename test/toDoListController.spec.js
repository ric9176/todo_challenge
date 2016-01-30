describe('ToDoListController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('ToDoListController');
  }));


  it('initialises with an empty array', function(){
    expect(ctrl.taskList).toEqual([])
  })


  it('is able to add a task and store it in the list', function(){
    ctrl.addTask("clean room");
    expect(ctrl.taskList[0].task).toEqual("clean room")
  })

  it('is able to mark tasks as completed', function(){
    ctrl.addTask("clean room");
    ctrl.taskDone(0);
    expect(ctrl.taskList[0].completed).toEqual(true)
  });

  describe('Deleting a task', function(){
    it('is able to remove a task from the list', function(){
      ctrl.addTask("clean room");
      ctrl.deleteTask(0);
      expect(ctrl.taskList[0]).toBeUndefined();
    });
  });

  describe('Clearing the To Do List', function(){
    it('resets the list back to empty', function(){
      ctrl.addTask("use TDD");
      ctrl.addTask("learn angular");
      ctrl.addTask("stop hating JavaScript");
      ctrl.clearList();
      expect(ctrl.taskList).toEqual([])
    });
  });

});
