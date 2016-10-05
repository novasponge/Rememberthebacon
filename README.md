# Remember the Bacon

[Heroku link](http://rememberthebacon.herokuapp.com/)

## Minimum Viable Product

Remember the Bacon is a web application inspired by Remember the milk built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Create, view, edit, destroy tasks
- [ ] Create, view, edit, destroy lists
- [ ] store tasks into lists
- [ ] list summary (time, num tasks, num completed)
- [ ] Search
- [ ] Production README(replace by real link later)

## Design Docs

* [View Wireframes] (./doc/wireframes/)
* [React Components] (./doc/components.md)
* [API endpoints] (./doc/endpoints.md)
* [DB schema] (./doc/schema.md)
* [Redux Structure] (./doc/structure.md)
* [Sample State] (./doc/state.md)
* [Implementation Timeline] (./doc/timeline.md)

Phase 1: - Backend setup and Front End User Authentication (1 day)

Objective: Functioning rails project with front-end Authentication

 - [ ] New Rails project
 - [ ] User model/migration
 - [ ] Back end authentication (session/password)
 - [ ] StaticPages controller and root view
 - [ ] Webpack & react/redux modules
 - [ ] APIUtil to interact with the API
 - [ ] Redux cycle for frontend authentication
 - [ ] User signup/signin components
 - [ ] Blank landing component after signup/signin
 - [ ] Style signup/signin components
 - [ ] Seed users
 Review phase 1

Phase 2: - Tasks Model, API, and components (4 days)

Objective: Tasks can be created, read, edited and destroyed through the API.

 - [ ] Task model and controller
 - [ ] Seed database with a small amount of test data
 - [ ] CRUD API for tasks (TasksController), create, destroy, update, show
 - [ ] JBuilder views for Tasks
 - [ ] Task components and respective Redux loops
 - [ ] create tasks groups: inbox, alltasks, today, tomorrow, this week
 - [ ] tasks can be completed
 - [ ] group tasks by its due date
 - [ ] TasksIndex
 - [ ] TasksIndexItem
 - [ ] AddTaskForm
 - [ ] Style tasks components
 - [ ] Seed tasks

Phase 3: - lists (2.5 days)

Objective: Lists can be created and tasks belong to related lists that can be created, read, edited and destroyed through the API.

 - [ ] Lists model and controller
 - [ ] Seed database with a small amount of test data
 - [ ] CRUD API for lists (ListsController), create, destroy, update
 - [ ] JBuilder views for lists
 - [ ] Lists components and respective Redux loops
 - [ ] vMoving tasks between lists
 - [ ] Viewing tasks by lists
 - [ ] Style lists components
 - [ ] Seed lists

Phase 4: - list summary (1 day)

Objective: display the summary of list including number of tasks, due date, number of completed tasks.

 - [ ] list summary view based on current list status;
 - [ ] style the app page

Phase 5: - search (1 day)

Objective: search tasks.

 - [ ] add search function which allows users to search tasks through different lists based on the keyword
 - [ ] style the app page

Phase 6: - review and testing (1 day)

objective: app should have a professional style and operates smoothly

 - [ ]  style the page
 - [ ]  Add login through Facebook feature
 - [ ]  Perform end-to-end testing to ensure usability
 - [ ]  Obtain feedback from other users

Bonus Features (TBD)
 - [ ] Add location tag to tasks
 - [ ] Add smart lists
 - [ ] Subtasks
