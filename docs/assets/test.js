const fetchTasks = async () => await fetch('./tasks-example.json').then(res => res.json()).then(data => console.log(data));
const tasks = fetchTasks()
console.log(tasks);
