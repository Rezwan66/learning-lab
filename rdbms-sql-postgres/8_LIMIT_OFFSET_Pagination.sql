-- limit, offset

select * from students limit 5; --limits count of query to the number specified

select * from students
where country in ('Germany','Australia','South Africa') limit 3;

select * from students limit 5 offset 2; --offsets(skips) the data by the number specified
select * from students offset 2;

-- So for a simple pagination:
    -- in the frontend the user will have pages like 1, 2, 3, 4, ...
    -- we will pass in the backend/db, offset value like 0, 1, 2, 3, ...


select * from students limit 5 offset 5 * 0; -- page 1

select * from students limit 5 offset 5 * 1; -- page 2

select * from students limit 5 offset 5 * 2; -- page 3