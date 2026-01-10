-- Create table
create table students(
  student_id serial primary key,
  first_name varchar(50) not null,
  last_name varchar(50) not null,
  age int,
  grade char(2),
  course varchar(50),
  email varchar(100) unique,
  dob date,
  blood_group varchar(5),
  country varchar(50)
)

-- Insert data
INSERT INTO students (first_name, last_name, age, grade, course, email, dob, blood_group, country) VALUES
('John', 'Doe', 21, 'B', 'Computer Science', 'johndoe1@example.com', '2004-04-15', 'O+', 'USA'),
('Alice', 'Smith', 22, 'A', 'Mechanical Engineering', 'alicesmith2@example.com', '2003-06-10', 'A-', 'Canada'),
('Michael', 'Johnson', 23, 'C', 'Biology', 'michaeljohnson3@example.com', '2002-08-25', 'B+', 'UK'),
('Sarah', 'Williams', 20, 'B', 'Physics', 'sarahwilliams4@example.com', '2005-01-20', 'O-', 'Australia'),
('David', 'Brown', 22, 'A', 'Mathematics', 'davidbrown5@example.com', '2003-11-11', 'AB+', 'Germany'),
('Emily', 'Davis', 24, 'C', 'Chemistry', 'emilydavis6@example.com', '2001-09-03', 'A+', 'France'),
('James', 'Miller', 19, 'B', 'Computer Science', 'jamesmiller7@example.com', '2006-02-27', 'O-', 'India'),
('Jessica', 'Taylor', 22, 'B', 'Mechanical Engineering', 'jessicataylor8@example.com', '2003-05-16', 'B-', 'South Africa'),
('Daniel', 'Moore', 23, 'C', 'Biology', 'danielmoore9@example.com', '2002-12-05', 'AB-', 'USA'),
('Sophie', 'Jackson', 21, 'A', 'Physics', 'sophiejackson10@example.com', '2004-07-25', 'O+', 'UK'),
('Matthew', 'Harris', 25, 'B', 'Mathematics', 'matthewharris11@example.com', '1998-03-12', 'A-', 'Australia'),
('Charlotte', 'Martin', 22, 'A', 'Chemistry', 'charlottemartin12@example.com', '2003-04-30', 'B+', 'USA'),
('Joshua', 'Garcia', 20, 'B', 'Computer Science', 'joshuagarcia13@example.com', '2005-01-11', 'O-', 'Canada'),
('Isabella', 'Rodriguez', 23, 'C', 'Mechanical Engineering', 'isabellarodriguez14@example.com', '2002-06-02', 'AB+', 'Germany'),
('Ethan', 'Wilson', 21, 'A', 'Biology', 'ethanwilson15@example.com', '2004-08-08', 'A+', 'France'),
('Olivia', 'Martinez', 22, 'B', 'Physics', 'oliviamartinez16@example.com', '2003-12-24', 'B-', 'South Africa'),
('Lucas', 'Anderson', 19, 'A', 'Mathematics', 'lucasanderson17@example.com', '2006-05-19', 'O+', 'India'),
('Megan', 'Thomas', 24, 'C', 'Chemistry', 'meganthomas18@example.com', '2001-09-17', 'A-', 'UK'),
('Liam', 'Jackson', 23, 'B', 'Computer Science', 'liamjackson19@example.com', '2002-07-30', 'B+', 'USA'),
('Sophia', 'White', 21, 'A', 'Mechanical Engineering', 'sophiawhite20@example.com', '2004-10-10', 'O-', 'Canada'),
('Benjamin', 'Lee', 25, 'C', 'Biology', 'benjaminlee21@example.com', '1998-01-01', 'AB-', 'Australia'),
('Ava', 'Allen', 22, 'B', 'Physics', 'avaallen22@example.com', '2003-05-30', 'A+', 'Germany'),
('William', 'Young', 20, 'A', 'Mathematics', 'williamyoung23@example.com', '2005-11-12', 'B-', 'South Africa'),
('Harper', 'King', 21, 'B', 'Chemistry', 'harperking24@example.com', '2004-06-22', 'O+', 'India'),
('Jacob', 'Scott', 23, 'C', 'Computer Science', 'jacobscott25@example.com', '2002-02-02', 'A-', 'USA'),
('Madison', 'Green', 22, 'A', 'Mechanical Engineering', 'madisongreen26@example.com', '2003-10-15', 'AB+', 'Canada'),
('Alexander', 'Adams', 21, 'B', 'Biology', 'alexanderadams27@example.com', '2004-09-05', 'B+', 'France'),
('Aiden', 'Baker', 20, 'A', 'Physics', 'aidenbaker28@example.com', '2005-04-14', 'O-', 'South Africa'),
('Ella', 'Gonzalez', 24, 'C', 'Mathematics', 'ellagonzalez29@example.com', '2001-12-11', 'A+', 'Germany'),
('Mason', 'Carter', 23, 'B', 'Chemistry', 'masoncarter30@example.com', '2002-05-20', 'B-', 'USA');

-- Using SELECT
-- select first_name, age from students;
select * from students;

-- Column Alias
select first_name as "First Name", age as student_age from students;
-- double quote "" denotes usage for columns
-- single quote '' denotes characters

-- Sorting
select first_name, blood_group, country, age from students order by age desc;
-- select first_name, blood_group, country, age from students order by blood_group asc;

-- Distinct
select distinct country from students;
select distinct course from students;

-- Filtering

-- = Operator
-- Select students from the USA
select first_name, age, course, country from students where country = 'USA';
-- Select students with a specific blood group ('A+')
select first_name, age, blood_group, country from students where blood_group = 'A+';

-- OR Operator
-- Select students from the USA or from Australia
select first_name, country from students where country = 'USA' or country = 'Australia';
-- Select students with a grade of 'A' or 'B' in Mathematics or Physics
select first_name, grade, course from students
where (grade = 'A' or grade = 'B') and (course = 'Mathematics' or course = 'Physics');

-- AND Operator
-- Select students with 'A' grade in Physics
select first_name, age, grade, course from students where grade = 'A' and course = 'Physics';
-- Select students from Germany or from Canada whose age is 22
select first_name, age, country from students
where (country = 'Germany' or country = 'Canada') and age = 22;

-- Comparison Operators (>, <, =, >=, <=)
-- Select students older than 20
select first_name, country, age from students where age > 20;

-- Select all students who are not from USA or Canada (Both != or <> can be used)
select first_name, country from students
where (country != 'USA' and country <> 'Canada');

-- BETWEEN & IN Operators
-- Select students whose age is between 20 and 22
select first_name, age, country from students
where age between 20 and 22;

-- select distinct age from students order by age asc;
-- select distinct dob from students order by dob asc;

-- Select students born between 1998 and 2001
select first_name, age, dob, country from students
where dob between '1998-01-01' and '2001-12-31';

-- Select students from Germany, Australia, or South Africa
-- select * from students
-- where country = 'Germany' or country = 'Australia' or country = 'South Africa';
select * from students
where country in ('Germany','Australia','South Africa');
-- Select students enrolled in 'Physics', 'Mathematics', or 'Biology'
select first_name, course, country from students
where course in ('Physics', 'Mathematics', 'Biology');

-- Search-type Operators (LIKE vs ILIKE)
-- Select students whose first name starts with 'A'
select first_name from students
where first_name like 'A%'; -- 'A%' denotes must start with A and then any number of characters
-- Select students whose first name is only 4 letters and starts with 'E'
select first_name from students
where first_name like 'E___'; -- _ denotes no. of characters
-- Select students whose first name's 2nd to last character is 'a'
select first_name from students
where first_name like '%a_';
-- Select students whose last name ends with 'n'
select last_name from students
where last_name like '%n';
-- Select different email domains of students
select email from students
where email like '%@gmail.com';

-- Case insensitive like operator --> ilike
select first_name, email  from students
where email ilike 'A%';

-- NOT Operator
-- Select students who are not from USA
select first_name, country from students
where not country = 'USA';
-- Select students whose grade is not 'A'
select first_name, grade from students
where not grade = 'A';