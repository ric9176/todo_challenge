describe('To Do List', function() {

  var taskField = element(by.model('tdCtrl.task'));
  var taskButton = element(by.className('add'));
  var taskList = element(by.className('taskList'));
  var taskCheckBox = element(by.model('deleted'));
  var taskRemove = element.all(by.className('remove')).first();
  var ps = element.all(by.css('p'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To Do List');
  });

  it('has an input box for new tasks and displays added tasks', function() {
    taskField.sendKeys('learn angular');
    taskButton.click();
    expect(taskList.getText()).toEqual('learn angular deleteTask!');
  });

  it('marks completed tasks as done using a checkbox', function() {
    taskField.sendKeys('learn angular');
    taskButton.click();
    taskCheckBox.click();
    expect(ps.first().getAttribute('class')).toMatch(/strike/);

  });

  it('can delete tasks using the delete task button', function() {
    taskField.sendKeys('learn angular');
    taskButton.click();
    taskField.sendKeys('learn not to hate protractor');
    taskButton.click();
    taskRemove.click();
    expect(taskList.getText()).not.toContain('learn angular');
  });
});
