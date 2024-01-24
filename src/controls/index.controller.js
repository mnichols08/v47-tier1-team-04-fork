// Imports JSON data from the "model"
import INITIAL_DATA from "../models/tasks.model.json" assert { type: "json" };
// Logs this value to console

function controller() {
  return { getAllTasks: () => INITIAL_DATA };
}
export default controller;
