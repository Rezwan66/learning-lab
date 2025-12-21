create table departments (
  department_id serial primary key,
  department_name varchar(50)
);

create table employees (
  employee_id serial primary key,
  employee_name varchar(50),
  department_id int references departments(department_id),
  salary decimal(10, 2),
  hire_date date
);

insert into departments (department_name)
values
  ('HR'),
  ('Marketing'),
  ('Fnance'),
  ('IT'),
  ('Sales'),
  ('Engineering'),
  ('Customer Support'),
  ('Administration'),
  ('Research'),
  ('Quality Assurance');

insert into employees (employee_name, department_id, salary, hire_date)
values
  ('Rahim Uddin', 1, 45000.00, '2021-01-15'),
  ('Karim Ahmed', 2, 52000.00, '2020-03-10'),
  ('Sara Khan', 3, 60000.00, '2022-06-01'),
  ('John Smith', 4, 48000.00, '2019-11-20'),
  ('Emma Brown', 5, 55000.00, '2021-08-05'),
  ('Ayaan Ali', 6, 50000.00, '2020-09-12'),
  ('Lina Rahman', 7, 62000.00, '2022-02-18'),
  ('Mark Taylor', 8, 70000.00, '2018-07-01'),
  ('Sophia Lee', 9, 58000.00, '2021-04-22'),
  ('Daniel Martinez', 10, 47000.00, '2019-12-10'),
  ('Nina Patel', 1, 65000.00, '2022-09-30'),
  ('James Wilson', 2, 72000.00, '2017-05-14'),
  ('Olivia Green', 3, 56000.00, '2021-10-11'),
  ('Arjun Mehta', 4, 53000.00, '2020-01-25'),
  ('Fatima Noor', 5, 46000.00, '2019-03-08'),
  ('Lucas Müller', 6, 75000.00, '2018-02-19'),
  ('Hannah White', 7, 59000.00, '2022-01-06'),
  ('Yusuf Islam', 8, 51000.00, '2020-06-17'),
  ('Chen Wei', 9, 68000.00, '2022-11-03'),
  ('Maria Garcia', 10, 49000.00, '2019-08-29'),
  ('Tom Anderson', 1, 71000.00, '2017-09-13'),
  ('Aisha Begum', 2, 64000.00, '2022-03-21'),
  ('Peter Novak', 3, 57000.00, '2021-12-02'),
  ('Ravi Kumar', 4, 54000.00, '2020-10-09'),
  ('Elena Rossi', 5, 46500.00, '2019-04-16'),
  ('Mohammed Salah', 6, 66000.00, '2022-07-14'),
  ('Chris Johnson', 7, 73000.00, '2018-06-27'),
  ('Zara Malik', 8, 58500.00, '2021-02-04'),
  ('Kevin O’Brien', 9, 52500.00, '2020-12-18'),
  ('Isabella Conti', 10, 47500.00, '2019-10-30');

-- Inner JOIN to retrieve employee and department info:
select employee_id,employee_name,d.department_id,department_name from employees as e
inner join departments as d 
on e.department_id = d.department_id;

-- Another syntax: ONLY if the bridging column name is the same on both tables:
select * from employees 
inner join departments using(department_id);

-- Show department name with average salary
select department_name, round(avg(salary)) as "Average Salary" from employees
inner join departments using(department_id)
group by department_name;

-- Count employees in each department
select department_name, count(employee_id) as "No. of Employees" from employees
inner join departments using(department_id)
group by department_name;

-- Find the department name with the highest avg salary
select department_name, round(avg(salary)) as avg_salary from employees
inner join departments using(department_id)
group by department_name
order by avg_salary desc limit 1;

-- Count employees hired each year
select extract(year from hire_date) as hiring_year, count(*) from employees
group by hiring_year;

select extract(year from '2025-12-25'::date)
select extract(month from '2025-12-25'::date)
select extract(day from '2025-12-25'::date)
