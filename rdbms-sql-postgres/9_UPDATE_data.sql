-- UPDATE

SELECT * FROM students;

-- UPDATE can sometimes be devastating if the correct condition is not provided!

update students set email = 'example@gamil.com' where email is null;

update students
set last_name = 'Nakamura', age = 25
where student_id = 1;

update students
set grade = 'C'
where student_id in (1, 2);

update students
set grade = 'B-'
where student_id in (7, 12, 24, 31);