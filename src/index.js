import './styles/index.scss'; // declares stylesheets that rely on images we need to render on screen from within our server

// Imports JSON data from the "model"
import INITIAL_DATA from './model/tasks.json' assert {type: 'json'};
// Logs this value to console
console.log(INITIAL_DATA);
