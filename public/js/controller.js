import Task from "./task.js";
import app from "./app.js";
import { resetIndex } from "./utils.js";
// declares controller class
export default class Controller {
  async init(title) {
    //this.resetState();
    await this.load();
    app.view.init(title);
  }
  async load() {
    localStorage.tasks
      ? JSON.parse(localStorage.getItem("tasks")).map(
          (task) =>
            new Task(
              task.name,
              task.group,
              task.category,
              task.frequency,
              task.days,
              task.calendar
            )
        )
      : await this.seed();
  }
  save() {
    localStorage.setItem("tasks", JSON.stringify(app.tasks));
  }
  // Method to pull in the data from the data.model.json file:
  async seed() {
    const seed = await fetch("./js/data/data.json")
      .then((res) => res.json())
      .then((data) =>
        data.map(
          (task) =>
            new Task(
              task.name,
              task.group,
              task.category,
              task.frequency,
              task.days,
              task.calendar
            )
        )
      );
    this.save();
    return seed;
  }
  // Method to clear/reset tasks:
  resetState() {
    app.tasks = [];
    resetIndex();
    return app;
  }
  // finds the unique groups within tasks then returns a filtered array with only the tasks within that group
  returnUniqueGroupTasks() {
    return this.returnUniqueGroupNames().map((group) =>
      this.returnByGroup(group)
    );
  }
  returnUniqueCategoryTasks() {
    return this.returnUniqueCategoryNames().map((category) =>
      this.returnByCategory(category)
    );
  }
  returnUniqueGroupNames() {
    return [...new Set(app.tasks.map((task) => task.group))];
  }
  returnUniqueCategoryNames() {
    return [...new Set(app.tasks.map((task) => task.category))];
  }
  returnUniqueCategories() {
    return [...new Set(app.tasks.map((task) => task))];
  }
  returnByGroup(group) {
    return app.tasks.filter((task) => task.group === group);
  }
  returnByCategory(category) {
    return app.tasks.filter((task) => task.category === category);
  }
  returnCategoryByGroup(group) {
    return app.tasks.filter((task) => task.group === group);
  }
  returnUniqueCategoriesByGroup(group) {
    const categories = this.returnCategoryByGroup(group);
    return [...new Set(categories.map((task) => task.category))];
  }
  createTask(name, group, category, frequency, days, calendar) {
    const newTask = new Task(name, group, category, frequency, days, calendar);
  }
  readAllTasks() {
    return app.tasks;
  }
  readTask(id) {
    const task = app.tasks.filter((task) => task.id === `task_${id}`)[0];

    return task.read();
  }
  updateTask(id, [...args]) {
    return this.readTask(id).update(...args);
  }
  // method to delete task by ID by using the .delete method on the
}
