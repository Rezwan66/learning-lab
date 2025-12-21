create table users (
  id serial primary key,
  username varchar(25) not null
);

create table posts (
  id serial primary key,
  title text not null,
  user_id int references users(id)
);

insert into users (username)
values ('akash'), ('batash'), ('sagor'), ('nodi');

insert into posts (title, user_id) values
('Enjoying a sunny day with Akash! ☀️', 2),
('Batash just shared an amazing recipe! 🍳', 1),
('Exploring adventures with Sagor. 🌊', 4),
('Nodi`s wisdom always leaves me inspired. 📖', 4);