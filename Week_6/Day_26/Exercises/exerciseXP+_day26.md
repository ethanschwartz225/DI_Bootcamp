-- create table students (
-- 	student_id serial primary key, 
-- 	student_first_name varchar(50) not null,
-- 	student_last_name varchar(50) not null, 
-- 	birth_date date not null
-- )

-- insert into students (student_first_name, student_last_name, birth_date)
-- values('Marc', 'Benichou', '1998-11-02'), ('Yoan', 'Cohen', '2010-12-03'), ('Lea', 'Benichou', '1987-07-27'), ('Amelia', 'Dux', '1996-04-07'),
-- ('David', 'Grez', '2003-06-14'), ('Omer', 'Simpson', '1980-10-03');

-- insert into students(student_first_name, student_last_name, birth_date)
-- values('Ethan', 'Schwartz', '1997-07-16');

-- select * from students;

-- select * from students where student_first_name = 'Marc' and student_last_name = 'Benichou';

-- select * from students where student_last_name = 'Benichou' or student_first_name = 'Marc';

-- select * from students where student_first_name ilike '%a%';

-- select * from students where student_first_name ilike 'a%';

-- select * from students where student_first_name like '%a';

-- select * from students where student_first_name like '%a_';

-- select * from students where student_id = 1 or student_id = 3;

-- select * from students where birth_date >= '2000-01-01';