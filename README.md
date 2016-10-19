# rememberthebacon

[rememberthebacon live](http://www.rememberthebacon.co/)

![Sign Up](/doc/screen_shot/Signup.png)
![Sign In](/doc/screen_shot/Signin.png)


## Overview

Remember the Bacon is a web application inspired by Remember the milk, a to-do list web app built using Ruby on Rails on the backend.

![lists with tasks](/doc/screen_shot/lists.png)
![tasks edit](/doc/screen_shot/tasks.png)

Rememberthebacon allows user to:

* Create an account
* Log in / Log out
* Add, edit and delete a to-do list
* Add and delete a to-do task to a list.
* Edit the name, priority, start date, due date, and completion status of list.
* Complete a task.
* Track the number of incomplete, completed, and overdue tasks at all tasks scope or individual list scope.
* Search for tasks by task name and/or task due date.

## Overall Structure

#### Back end
The app was built using Ruby on Rails on the back end with a postgreSQL database.

#### Front end
The front end is built completely in [React.js](https://facebook.github.io/react/) and JavaScript and utilizes React's [Redux](http://redux.js.org/) architecture.

#### Libraries

Remember the Bacon uses:
- [React.js](https://facebook.github.io/react/)
- [Redux](http://redux.js.org/)
- [BCrypt](https://github.com/codahale/bcrypt-ruby)
- [React Modal](https://github.com/reactjs/react-modal)
- [Moment](http://momentjs.com/)
- [nuka carousel](https://github.com/FormidableLabs/nuka-carousel)
- [react clickoutside](https://github.com/tj/react-click-outside)
- [react datepicker](https://github.com/Hacker0x01/react-datepicker)
- [react dropdown](https://github.com/fraserxu/react-dropdown)
- [react router](https://github.com/ReactTraining/react-router)

## key Features

#### Tracking numbers of tasks accordingly

Users can track their number of tasks by list, due date and completion status.

#### Search

Remember the milk uses two regex expression to match users search input in order to filter date string out of task name string.

```ruby
queryStr = queryStr.split(" ")
name =  queryStr.select do |str|
  !(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.match(str)) &&
  !(/(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})(\/|-|\.)(((0[13578]|Jan|Mar|May|Jul|Aug|Oct|Dec|1[02])(\/|-|\.)(0[1-9]|[12][0-9]|3[01]))|((0[469]|11|Apr|Jun|Sep|Nov)(\/|-|\.)(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)/.match(str))
end

date = queryStr.select do |str|
  /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.match(str) ||
  /(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})(\/|-|\.)(((0[13578]|Jan|Mar|May|Jul|Aug|Oct|Dec|1[02])(\/|-|\.)(0[1-9]|[12][0-9]|3[01]))|((0[469]|11|Apr|Jun|Sep|Nov)(\/|-|\.)(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)/.match(str)
end
```
#### Notification

Users will be notified of their tasks via email a day ahead of the tasks' due date.


## Future Improvements

Users will be able to add other users and assign tasks to other users.

Users will be able to add tags to their tasks.

Users will be able to use smart lists, a list auto creation feather which creates lists with tasks based on given criteria.

Users will be able to add location to their tasks
