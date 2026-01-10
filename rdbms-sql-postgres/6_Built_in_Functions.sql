-- Scalar functions - will run everytime for each row
-- upper, lower, concat, length

-- Show all first names of students in uppercase
select upper(first_name) as first_names_in_upper, first_name, age, country from students;
select lower(country) as countries_in_lower, first_name, age, country from students;
select concat(first_name, ' ', last_name) as "Full Name", first_name, age, country from students;
select length(last_name) as "Length", last_name, age, country from students;

-- Aggregate functions - will collect all rows of a certain column to make a manipulation and return one value
-- Aggregate functions take the whole table as a set and runs against that set
-- avg, max, min, sum, count
select avg(age) as avg_age from students;
select max(age) as max_age from students;
select min(age) as min_age from students;
select sum(age) as sum_of_ages from students;
select count(first_name) from students where course = 'Biology';

-- Find the number of rows in the table
select count(*) from students;

-- Find number of students in each course
select course, count(*) from students group by course;