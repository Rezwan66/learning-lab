-- Primary Key (unique identifier)
-- NOT NULL (must have a value)
-- UNIQUE (no duplicates values allowed)
-- CHECK (condition must be true)
-- DEFAULT (auto value if not given)
-- FOREIGN KEY (must exist in another table)

create table if not exists students(
  id serial primary key,
  username varchar(20) not null,
  email varchar(100) unique,
  age smallint (age>=18),
  isActive boolean default true
)
create table if not exists students(
  id serial,
  username varchar(20) not null,
  email varchar(100),
  age smallint (age>=18),
  isActive boolean default true,
  primary key (id),
  unique(username, email)
)