# Schema Information

## tasks
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
author_id          | integer   | not null, foreign key (references users), indexed
name               | string    | not null
completed          | boolean   | not null, default: false
start_date         | date      |
due_date           | date      |
priority           | integer   |
list_id            | integer   | foreign key (references lists), indexed

## lists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed, unique
name        | string    | not null, indexed, unique [creator_id]


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email_address   | string    | not null, indexed, unique
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
