-- DELETE, like UPDATE needs also to be handled very carefully with specific filtering

select * from students;
-- select * from students where grade = 'C';

delete from students where grade = 'C';

select * from students where age > 20 and grade = 'B-';

delete from students
where age > 20 and grade = 'B-';





