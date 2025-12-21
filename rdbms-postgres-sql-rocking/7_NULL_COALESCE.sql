-- select null <> null;

insert into students (first_name, last_name, age, grade, course, dob, blood_group, country)
values ('Alice', 'March', 17, 'F', 'Geography', '2008-04-15', 'O+', 'USA');

-- select * from students where email <> null; we will not get anything from these expressions since anythinhg equal to null outputs only null!!!
-- select * from students where email = null;

select * from students where email is not null order by student_id asc;

-- Hence while working with null value, we must always use is/is not, etc for filtering.

-- COALESCE -- will check all arguments provided and returns the first not null arg!
select coalesce(2,null);
select coalesce(null,2);
select coalesce(null,null,2,3,4);
select coalesce(null,null,3,2);

select first_name, age, coalesce(email, 'Not Provided') as student_email from students;

