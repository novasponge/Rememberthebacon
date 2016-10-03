## Component Heirarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - Login
 - Signup

**AppContainer**
 - AppHeader
  * searchBar
  * notification

 - Taskssidebar
  *  inbox
  *  AllTasks
  *  Today
  *  Tomorrow
  *  Week
  *  ListsIndex
    + ListsIndexItem

 - TasksHeader
  * TaskNewForm
  * TaskEditForm
  * TasksIndex
   + TasksIndexItem

 - Details
  * TaskDetail
  * ListDetail


## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/app/all" | "ListsIndexContainer" |
| "/app/inbox" | "Inbox" |
| "/app/alltasks" | "AllTasks" |
| "/app/today" | "Today" |
| "/app/tomorrow" | "Tomorrow" |
| "/app/week" | "week" |
