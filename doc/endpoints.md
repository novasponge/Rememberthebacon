# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Tasks

- `GET /api/tasks`
  - Tasks index/search
- `POST /api/tasks`
- `GET /api/tasks/:id`
- `PATCH /api/tasks/:id`
- `DELETE /api/tasks/:id`

### lists

- `GET /api/lists`
- `POST /api/lists`
- `GET /api/lists/:id`
- `DELETE /api/lists/:id`
- `GET /api/lists/:id/tasks`
  - index of all tasks for a lists
