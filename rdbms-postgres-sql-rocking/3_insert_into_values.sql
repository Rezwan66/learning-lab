 -- create a table
create table
  person (
    id serial primary key,
    username varchar(50) unique,
    email varchar(50) unique,
    age int check (age >= 20),
    isActive boolean default true
  )
  -- single-row insert
insert into
  person (id, username, email, age)
values
  (2, 'sydney', 'sydney@sweeney.com', 29);

-- multi-row insert
insert into
  person (username, email, age)
values
  ('lara', 'lara@croft.com', 29),
  ('millie', 'millie@bobbie.com', 20),
  ('candace', 'candace@owens.com', 30),
  ('milly', 'milly@alcock.com', 21);

-- without column insert
insert into
  person
values
  (43, 'sakura', 'sakura@gamil.com', 24);

-- select * from person;