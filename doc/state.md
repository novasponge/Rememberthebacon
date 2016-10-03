```js
{
  currentUser: {
      id: 1,
      username: "app-academy"
  },

  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createTasks: {errors: ["body can't be blank"]}
  },

  tasks: {
    1: {
      author_id: 1,
      name: "Sample State",
      completed: "false",
      start_date: "10-1-2016",
      due_date: '10-1-2016',
      priority: 1,
      list_id: 1
    }
  },
  lists: {
    1: {
      author_id: 1,
      name: "home list"
    }
  }
}
```
