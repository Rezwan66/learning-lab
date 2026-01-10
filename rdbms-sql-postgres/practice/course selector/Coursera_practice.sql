create database coursera;

create table students (
  student_id int primary key,
  first_name varchar(50),
  last_name varchar(50),
  email varchar(100),
  phone varchar(20),
  country varchar(50),
  enrollment_date date
);

create table courses (
  course_id int primary key,
  course_title varchar(150),
  category varchar(50),
  price numeric(10, 2),
  instructor varchar(100),
  published_year int
);

create table enrollments (
  enrollment_id int primary key,
  student_id int references students(student_id),
  course_id int references courses(course_id),
  enrollment_date date,
  progress_percentage int,
  paid_amount decimal(10, 2)
);

-- Inserting data
insert into students (student_id, first_name, last_name, email, phone, country, enrollment_date)
values
  (1, 'Rahim', 'Uddin', 'rahim@email.com', '01711111111', 'Bangladesh', '2023-01-10'),
  (2, 'Karim', 'Ahmed', 'karim@email.com', NULL, 'Bangladesh', '2023-01-15'),
  (3, 'Sara', 'Khan', 'sara@email.com', '01822222222', 'Pakistan', '2023-02-01'),
  (4, 'John', 'Smith', 'john@email.com', NULL, 'USA', '2023-02-10'),
  (5, 'Emma', 'Brown', 'emma@email.com', '01933333333', 'UK', '2023-02-20'),
  (6, 'Ayaan', 'Ali', 'ayaan@email.com', NULL, 'India', '2023-03-05'),
  (7, 'Lina', 'Rahman', 'lina@email.com', '01644444444', 'Bangladesh', '2023-03-12'),
  (8, 'Mark', 'Taylor', 'mark@email.com', NULL, 'Australia', '2023-03-25'),
  (9, 'Sophia', 'Lee', 'sophia@email.com', '01555555555', 'USA', '2023-04-01'),
  (10, 'Daniel', 'Martinez', 'daniel@email.com', NULL, 'Spain', '2023-04-10');

insert into courses (course_id, course_title, category, price, instructor, published_year) 
values
  (1, 'Complete SQL Bootcamp', 'Database', 49.99, 'John Carter', 2021),
  (2, 'Advanced JavaScript', 'Programming', 59.99, 'Sarah Miller', 2020),
  (3, 'Python for Data Science', 'Data Science', 69.99, 'David Kim', 2022),
  (4, 'Web Development with React', 'Programming', 54.99, 'Emily Stone', 2021),
  (5, 'Machine Learning Basics', 'AI', 79.99, 'Andrew Ng', 2019),
  (6, 'Cloud Computing Fundamentals', 'Cloud', 64.99, 'James Allen', 2020),
  (7, 'UI/UX Design Essentials', 'Design', 39.99, 'Laura Scott', 2022),
  (8, 'DevOps for Beginners', 'DevOps', 74.99, 'Michael Brown', 2023);

insert into enrollments (enrollment_id, student_id, course_id, enrollment_date, progress_percentage, paid_amount)
values
  (1, 1, 1, '2023-05-01', 80, 49.99),
  (2, 2, 2, '2023-05-03', NULL, 59.99),
  (3, 3, 3, '2023-05-05', 60, 69.99),
  (4, 4, 1, '2023-05-07', 100, 49.99),
  (5, 5, 4, '2023-05-10', 40, 54.99),
  (6, 6, 5, '2023-05-12', NULL, 79.99),
  (7, 7, 2, '2023-06-01', 90, 59.99),
  (8, 8, 6, '2023-06-02', 30, 64.99),
  (9, 9, 3, '2023-06-03', 70, 69.99),
  (10, 10, 7, '2023-06-04', NULL, 39.99),
  (11, 1, 8, '2023-06-05', 20, 74.99),
  (12, 2, 1, '2023-06-06', 50, 49.99),
  (13, 3, 6, '2023-06-07', NULL, 64.99),
  (14, 4, 4, '2023-06-08', 85, 54.99),
  (15, 5, 5, '2023-06-09', 60, 79.99);

-- Display all students and their phone numbers.
-- If the phone number is NULL, show 'Not Provided' using COALESCE.
select student_id, first_name, last_name, email, coalesce(phone, 'Not Provided') as phone, country, enrollment_date 
  from students;

-- Show all courses ordered by price (highest to lowest) and limit the result to 5 courses.
select * from courses order by price desc limit 5;

-- Display courses for page 2, assuming 3 courses per page, using LIMIT and OFFSET.
select * from courses limit 3 offset 3 * 1;

-- Update the price of all courses in the Programming category by increasing it 10%.
-- select * from courses where category = 'Programming';
update courses set price = price * 1.1 where category = 'Programming';

-- Delete all enrollment records where progress_percentage is NULL.
-- select * from enrollments;
delete from enrollments where progress_percentage is null;

-- Find the total paid amount per course category using GROUP BY.
select category, count(*), sum(paid_amount) from enrollments as e
join courses as c on e.course_id = c.course_id
group by category;

-- Show course categories where the average course price is greater than 60 using HAVING.
select category, count(*), avg(price) from courses
group by category
having avg(price) > 60;

-- Count how many students are enrolled in each course.
select course_title, count(*) from enrollments as e
join students as s on e.student_id = s.student_id
join courses as c on e.course_id = c.course_id
group by course_title;

-- Explain what happens if you try to insert an enrollment with a student_id that does not exist in the students table.
-- student_id is a foreign key of the enrollment table, which sets a relation from this foreign key to the primary key of the students table.
-- Hence, if we try to insert a data with student_id which is not in the students table, the record cannot be matched by postgres and will show an error.

-- Display student full name, course title, and paid amount using an INNER JOIN.
select concat(first_name, ' ', last_name) as "Full Name", course_title, paid_amount from enrollments as e
join students as s on e.student_id = s.student_id
join courses as c on e.course_id = c.course_id;

-- Display all students and their enrolled courses.
-- Include students who have not enrolled in any course using a LEFT JOIN.
select s.student_id, enrollment_id, c.course_id, course_title from students as s
left join enrollments as e on e.student_id = s.student_id
left join courses as c on e.course_id = c.course_id;

-- Display all courses and their enrolled students.
-- Include courses that have no enrollments using a RIGHT JOIN.
select s.student_id, s.first_name, c.course_id, course_title from students as s
right join enrollments as e on e.student_id = s.student_id
right join courses as c on e.course_id = c.course_id;

-- Display all students and all courses, even if there is no matching enrollment, using a FULL JOIN.
select s.student_id, s.first_name, c.course_id, course_title from students as s
full join enrollments as e on e.student_id = s.student_id
full join courses as c on e.course_id = c.course_id;

-- Show the number of enrollments per year based on enrollment_date.
select extract(year from enrollment_date) as enrollment_year, count(*)
from enrollments
group by enrollment_year;

-- Find the average progress percentage per course, ignoring NULL values.
select course_title, count(progress_percentage), avg(progress_percentage) as avg_progress_percent from enrollments as e
inner join courses as c on e.course_id = c.course_id
group by course_title;

-- 1. COUNT(*):

-- This counts all rows in the group, including those with NULL values in any column.

-- When you use COUNT(*) in a GROUP BY query, it gives the total number of rows per group, regardless of whether the progress_percentage is NULL or not.

-- 2. COUNT(progress_percentage):

-- This counts only the rows where the progress_percentage is not NULL.

-- So, it will only count the rows where there is an actual value for progress_percentage in that group.

-- So, what’s the difference?

-- When to use COUNT(*): If you're interested in knowing the total number of records in each group, including those with NULL values in progress_percentage, use COUNT(*).

-- When to use COUNT(progress_percentage): If you only want to count the number of rows where progress_percentage is not NULL, then you should use COUNT(progress_percentage). 
-- This is useful when you care about the actual data in the progress_percentage column and want to exclude NULL values from your count.