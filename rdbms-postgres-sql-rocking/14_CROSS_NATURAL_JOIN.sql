create table employees (
  emp_id int,
  emp_name varchar(50),
  dept_id int
);

create table departments (
  dept_id int,
  dept_name varchar(50)
);

-- Inserting sample data
insert into employees values (1, 'John Doe', 101);
insert into employees values (2, 'Jane Smith', 102);

insert into departments values (101, 'Human Resources');
insert into departments values (102, 'Marketing');

select * from employees;
select * from departments;

-- CROSS JOIN
-- (Finds cross product of each rows, so for every row of left table, we will have all combinations using all rows from right table)
select * from employees
cross join departments;

-- NATURAL JOIN
-- (Internally it first makes a cross join, then from all the combinations, keeps only those rows where the data of common rows match -- essentially a inner join! However, for natural join, there must be common column names, otherwise, it cannot find the common data. If there is no common column name, then it will just show a cross join, even if there are common data.)
select * from employees
natural join departments;

-- Natural joins are normally not used for production-grade use cases, since if a column name is altered, it will not work and the query will break.

-- Mostly inner and left joins are used all the time.