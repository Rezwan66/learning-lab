-- FUNCTIONS - return type is mentioned
-- Declare the function
CREATE FUNCTION emp_count () returns int language sql AS $$
  select count(*) from employees
$$
-- Call the function
SELECT
  emp_count ();


-- Another function: perform an action rather than return
CREATE FUNCTION delete_by_id (emp_id int) returns void language sql AS $$
  delete from employees where id = emp_id
$$
SELECT
  delete_by_id (5);


-- PROCEDURE - nothing to be returned, only an action is performed
CREATE PROCEDURE delete_emp_byid (emp_id int) language plpgsql AS $$
  begin
    delete from employees where id = emp_id;
  end;
$$
CALL delete_emp_byid (4);


-- Create a reusable procedure, where the user will give the department, then the avg for that dept will be calculated, then the salary of those people with salary below the avg, will be increased by 10%
CREATE PROCEDURE increase_low_salary (department_name varchar(50)) language plpgsql AS $$
  declare avg_salary int;
  begin
    -- First step
    select avg(salary) into avg_salary from employees
    where department = department_name;

    -- Second step
    update employees set salary = salary * 1.1
    where department = department_name and salary < avg_salary;
  end;
$$
-- select avg(salary) from employees
--     where department = 'HR';

call increase_low_salary('HR');
call increase_low_salary('IT');