-- EXERCISE 1
-- select first_name as "First Name", last_name as "Last Name" from employees;

-- select distinct department_id from employees;

-- select * from employees order by first_name desc;

-- select first_name, last_name, salary, (0.15 * salary) as "PF" from employees;

-- select employee_id, first_name, last_name, salary 
-- from employees 
-- order by salary asc;

-- select sum(salary) from employees;

-- select min(salary) from employees;

-- select max(salary) from employees;

-- select avg(salary) from employees;

-- select count(employee_id) from employees;

-- select upper(first_name) from employees;

-- select substring(first_name, 1, 3) from employees ;

-- select concat(first_name, ' ', last_name) as "Full Name" from employees;

-- select first_name, last_name, length(first_name) as "first name length" from employees;

-- select first_name from employees
-- where first_name ilike '%0-9%';

-- select * from employees limit 10;

-- EXERCISE 2: Restricting and sorting

-- select first_name, last_name, salary 
-- from employees
-- where salary between 10000 and 15000;

-- select first_name, last_name, hire_date
-- from employees
-- where hire_date between '1986-12-31' and '1988-01-01';

-- select first_name 
-- from employees
-- where first_name ilike '%e%' and first_name ilike '%c%';

-- select employees.last_name, jobs.job_title, employees.salary
-- from employees
-- inner join jobs
-- on jobs.job_id = employees.job_id
-- where jobs.job_title != 'Programmer'
-- and jobs.job_title != 'Shipping Clerk'
-- and employees.salary != 4500 
-- and employees.salary != 10000
-- and employees.salary != 15000;

-- select last_name from employees
-- where length(last_name) = 6;

-- select last_name from employees
-- where last_name ilike '__e%';

-- select jobs.job_title, employees.employee_id
-- from jobs
-- full join employees
-- on jobs.job_id = employees.job_id

-- select jobs.job_title, employees.last_name 
-- from jobs
-- full join employees
-- on employees.job_id = jobs.job_id;

-- Write a query to select all information of employees whose
-- last name is either ‘JONES’ or ‘BLAKE’ or ‘SCOTT’ or ‘KING’ or ‘FORD’.

-- select * from employees
-- where last_name ilike '%JONES%' or
-- last_name ilike '%BLAKE%' or
-- last_name ilike '%SCOTT%' or
-- last_name ilike '%KING%' or
-- last_name ilike '%FORD%'



