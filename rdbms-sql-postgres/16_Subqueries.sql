drop table employees;

create table employees (
  id serial primary key,
  name varchar(50),
  department varchar(50),
  salary int
);

insert into employees (name, department, salary)
values
  ('Rahim', 'IT', 50000),
  ('Karim', 'HR', 40000),
  ('Selim', 'IT', 60000),
  ('Jamal', 'Finance', 45000),
  ('Kamal', 'HR', 35000);

-- Find the highest salary
select max(salary) as "Highest Salary" from employees;

-- Find which employee gets the highest salary
select * from employees
where salary = (select max(salary) from employees);

-- Find employees who earn more than the average salary
select * from employees
where salary > (select avg(salary) from employees);

-- Name of the employee who gets the highest salary in the HR department
select name from employees
where salary = (
  select max(salary) from employees 
  where department = 'HR'
);