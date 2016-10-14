# rememberthebacon

[rememberthebaconlive](http://www.rememberthebacon.co/)

Remember the Bacon is a web application inspired by Remember the milk built using Ruby on Rails on the backend, a postgresql database and React with a Redux architectural framework on the frontend.

## Features & Implementation

### Task Rendering and Editing

  Tasks are stored in one table in the database, which contains columns of `id`, `list_id`, `name`, `completed`, `start_date`, `due_date`, `priority`, `created_at`, `updated_at`. Upon login, an API call is made to the database which joins the user table with the list table on `user_id` and joins the task table on `list_id` and filters by the current user's id. Tasks are held in the `TasksStore` until the session is destroyed.

  Tasks are rendered in `task_index` component,
