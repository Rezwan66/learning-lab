select * from students;

select country from students
group by country;

-- Count students by country
select country, count(*) from students
group by country;

-- Show average age of each country of students
select country, avg(age) from students
group by country;

-- Count students by grade
select grade, count(*) from students
group by grade;

-- GROUP BY, filtering
-- Courses with more than 4 students
select course, count(*) from students
group by course
  having count(*) > 4;

-- Having runs filter on each group that is created, while where runs a filter on each row of the entire table.

-- Countries where avverage student age is greater than 21
select country, count(*), avg(age) from students
group by country
having avg(age) > 21;