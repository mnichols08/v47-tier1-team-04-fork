(function () {
    class App {
      constructor() {
        this.tasks = [];
      }
      //Function to initialize app:
      init() {
        this.seed();
        return this;
      }
      //Function to clear/reset tasks:
      resetState() {
        this.tasks = [];
        return this;
      }
      //Function to pull in the data from the data.model.json file:
      async seed() {
        await fetch("./js/data.model.json")
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
      }
    }
    const app = new App();
  
    //Object constructor to create new tasks:
    class Task {
      constructor(name, group, category, frequency, days, calander) {
        this.name = name;
        this.group = group;
        this.category = category;
        this.frequency = frequency;
        this.days = days;
        this.calander = calander;
        this.complete = false;
        app.tasks.push(this);
      }

      read() {
        this.complete = false;
        return this;
      }
      //Function to create new tasks:
      update(name, group, category, frequency, days, calander) {
        this.name = name;
        this.group = group;
        this.category = category;
        this.frequency = frequency;
        this.days = days;
        this.calander = calander;
        this.complete = false;
        return this;
      }
    }
  
    //Function to display the data into HTML:
    class View {
      constructor(task) {
        this.task = task;
      }
      renderView() {
        const anchor = document.querySelector(".daily-checklist");
        const view = document.createElement("div");
        view.innerHTML = `
        <div class="activity">
           <h3>${this.task.group} <i class="fa-solid fa-circle-chevron-down"></i></h3>
           <ul id="activity-el">
       
           </ul>
       </div>
        `;
        anchor.append(view);
      }
    }
  
    app.init();
    // setTimeout(() => console.log(app), 50)
    // setTimeout(() => console.log(app.tasks[0].read()), 50)
    //setTimeout(() => console.log(app.tasks[0].update('new','change','from','method','that')), 50)
    // setTimeout(() => console.log(app.tasks.filter(task => task.group === "STUDYING")), 50)
  // setTimeout(() =>   console.log([...new Set(app.tasks.map(task => task.group))]), 50)
  const groups = () => [...new Set(app.tasks.map(task => task.group))]
    setTimeout(() => groups().map(group => new View(group)), 50);
    console.log(groups())
  })();


  





// import { userActivities } from "./data.js"

// fetch the json file with Stacy's code
// const fetchJsonFile = async function() {
//     try {
//         const response = await fetch('https://raw.githubusercontent.com/chingu-voyages/voyage-project-tier1-dailytasks/main/assets/tasks-example.json');
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error loading JSON:', error);
//         throw error;
//     }
// };

// async function inputUserData() {
//     try {
//         const data = await fetchJsonFile();
//         console.log('Data:', data);

//         // Moved today's date inside of the function
//         function updateDate() {
//             const dateDiv = document.getElementById('date');
//             const today = new Date();
//             const formattedDate = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
//             dateDiv.textContent = `Today: ${formattedDate}`;
//         }
//         updateDate();

//         const contentActivityContainer = document.querySelector('.content-activity');

//         // Map() json data per Micky's idea
//         data.map(category => {
//             const categoryDiv = document.createElement('div');
//             categoryDiv.classList.add('content-activity');

//             const categoryNameHeading = document.createElement('h2');
//             categoryNameHeading.classList.add('category-name');
//             categoryNameHeading.textContent = category.categoryName;
//             categoryDiv.appendChild(categoryNameHeading);

//             category.activityTypes.map(activityType => {
//                 const activityDiv = document.createElement('div');
//                 activityDiv.classList.add('content-main');

//                 const ellipseImg = document.createElement('img');
//                 ellipseImg.src = "./img/Ellipse8.svg";
//                 ellipseImg.alt = "ellipse checkbox";
//                 ellipseImg.classList.add('ellipse');
//                 activityDiv.appendChild(ellipseImg);

//                 ellipseImg.addEventListener('click', function() {
//                     console.log("ellipse clicked!");
//                     console.log("current source: ", this.src);

//                     contentInnerDiv.classList.toggle('darken');

//                     if (this.src.includes("Ellipse8.svg")) {
//                         this.src = "./img/favicon.png";
//                         this.style.width = '55px';
//                         this.style.height = '55px';
//                         this.parentElement.style.display = 'flex';
//                         this.parentElement.style.justifyContent = 'center';
//                         this.parentElement.style.alignItems = 'center';
//                     } else {
//                         this.src = "./img/Ellipse8.svg";
//                     }
//                 });

//                 const contentInnerDiv = document.createElement('div');
//                 contentInnerDiv.classList.add('content-inner');

//                 const contentTaskDiv = document.createElement('div');
//                 contentTaskDiv.classList.add('content-task');

//                 const activityNameHeading = document.createElement('h3');
//                 activityNameHeading.classList.add('activity');
//                 activityNameHeading.textContent = activityType.activityName;
//                 contentTaskDiv.appendChild(activityNameHeading);

//                 const priorityBtn = document.createElement('a');
//                 priorityBtn.href = "#";
//                 priorityBtn.classList.add('btn', 'btn-lite', 'btn-blue');
//                 priorityBtn.textContent = "Low"; 
//                 contentTaskDiv.appendChild(priorityBtn);

//                 contentInnerDiv.appendChild(contentTaskDiv);

//                 const contentDescriptionDiv = document.createElement('div');
//                 contentDescriptionDiv.classList.add('content-description');

//                 const contentParaDiv = document.createElement('div');
//                 contentParaDiv.classList.add('content-para');

//                 const contentDescriptionEditDiv = document.createElement('div');
//                 contentDescriptionEditDiv.classList.add('content-description-edit');

//                 contentDescriptionDiv.appendChild(contentParaDiv);
//                 contentDescriptionDiv.appendChild(contentDescriptionEditDiv);

//                 activityType.Tasks.map(task => {
//                     console.log("Tasks: ", task.taskName);
//                     const taskNameParagraph = document.createElement('p');
//                     taskNameParagraph.classList.add('task-name');
//                     taskNameParagraph.textContent = task.taskName;
//                     contentParaDiv.appendChild(taskNameParagraph);
//                 });

//                 const editPencilImg = document.createElement('img');
//                 editPencilImg.src = "./img/mynaui_pencil.svg";
//                 editPencilImg.alt = "edit pencil image";
//                 editPencilImg.classList.add('icon-edit');
//                 contentDescriptionEditDiv.appendChild(editPencilImg);

//                 const trashImg = document.createElement('img');
//                 trashImg.src = "./img/ph_trash.svg";
//                 trashImg.alt = "delete trash can image";
//                 trashImg.classList.add('icon-edit');
//                 contentDescriptionEditDiv.appendChild(trashImg);

//                 contentDescriptionDiv.appendChild(contentDescriptionEditDiv);

//                 contentInnerDiv.appendChild(contentDescriptionDiv);

//                 activityDiv.appendChild(contentInnerDiv);

//                 categoryDiv.appendChild(activityDiv);
//             });

//             contentActivityContainer.appendChild(categoryDiv);
//         });

//         const dailyChecklistContainer = document.querySelector('.daily-checklist');

//         data.map(category => {
//             const categoryDiv = document.createElement('div');
//             categoryDiv.classList.add('activity');

//             const categoryHeading = document.createElement('h3');
//             categoryHeading.textContent = category.categoryName;
//             categoryHeading.innerHTML += ' <i class="fa-solid fa-circle-chevron-down"></i>';
//             categoryDiv.appendChild(categoryHeading);

//             const activityList = document.createElement('ul');

//             category.activityTypes.map(activityType => {
//                 const activity = document.createElement('li');
//                 activity.textContent = activityType.activityName;
//                 activityList.appendChild(activity);
//             });

//             categoryDiv.appendChild(activityList);

//             dailyChecklistContainer.appendChild(categoryDiv);
//         });

//         const menuBtn = document.querySelector('.menu-btn');
//         const asideEl = document.getElementById('aside-el');

//         menuBtn.addEventListener('click', function () {
//             asideEl.style.display = (asideEl.style.display === 'none' || asideEl.style.display === '') ? 'block' : 'none';
//         });      

//     } catch (error) {
//         console.error('Error in inputUserData:', error);
//     }
// }

// inputUserData();

// for (let category of userActivities) {
//     console.log("Category:", category.categoryName);
  
//     for (let activityType of category.activityTypes) {
//       console.log("  Activity Type:", activityType.activityName);
  
//       for (let task of activityType.Tasks) {
//         console.log("    Task Name:", task.taskName);
//       }
//     }
//   }