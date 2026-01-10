-- INNER JOIN/JOIN (intersection/common data will only be used when making the join)
-- Show titles of posts and their corresponding usernames
select title, username from posts
join users on posts.user_id = users.id;

select * from posts
join users on posts.user_id = users.id;

-- id is there on both tables when joined, so we can explicitly pass table context like posts.id for select to solve ambiguity error.
select p.id, title, username from posts as p
inner join users as u on p.user_id = u.id;

insert into posts (id, title) values
(5, 'Random title with no user id! ❌');

-- If we have this new data with no user_id, then the join will not find any corresponding user in the user table, so it will also delete the row from the join table!

-- LEFT JOIN / LEFT OUTER JOIN
-- (Keeps everything from the primary/first mentioned/left table in the join then matches and brings info from the secondary tables, filling non-matching info with null)
select * from posts as p
left join users as u on p.user_id = u.id;

-- RIGHT JOIN / RIGHT OUTER JOIN
-- (Keeps everything from the secondary/right table in the join then matches and brings info from the primary/first mentioned/left table, filling non-matching info with null)
select * from posts as p
right join users as u on p.user_id = u.id;

-- For INNER JOIN, the order of primary and secondary tables dont matter, since only the common data is retrieved.
-- But for LEFT and RIGHT JOIN, the order matters naturally.

-- FULL JOIN / FULL OUTER JOIN
-- (bring everything from left table and right table regardless of if no data condition matches i.e. bring all info)
select * from posts as p
full join users as u on p.user_id = u.id;