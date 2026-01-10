-- CREATE TRIGGER trigger_name
-- {BEFORE | AFTER | INSTEAD OF} {INSERT | UPDATE | DELETE | TRUNCATE}
-- ON table_name
-- [FOR EACH ROW]
-- EXECUTE FUNCTION function_name();
CREATE FUNCTION delete_by_id (emp_id int) returns void language sql AS $$
  delete from employees where id = emp_id
$$;

create table employee_logs (
  id serial primary key,
  emp_name varchar(100),
  action varchar(25),
  action_time timestamp default now()
);

create trigger save_employee_delete_logs
after delete on employees for each row
execute function log_employee_deletion ();

create function log_employee_deletion () returns trigger language plpgsql as $$
  begin
    insert into employee_logs (emp_name, action)
    values (old.name, 'DELETE');
  return old;
  end;
$$;

-- deleting a row
select
  delete_by_id (5);