describe('To Do List', function() {

  var taskField = element(by.model('tdCtrl.task'));
  var taskButton = element(by.className('btn'));
  var taskList = element(by.className('taskList'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To Do List');
  });

  it('has an input box for new tasks and displays added tasks', function() {
    taskField.sendKeys('learn angular');
    taskButton.click();
    expect(taskList.getText()).toEqual('learn angular');
  });
});
