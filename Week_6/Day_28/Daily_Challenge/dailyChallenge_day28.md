-- create table customer (
-- 	customer_id serial primary key,
-- 	first_name varchar(50) not null,
-- 	last_name varchar(50) not null
-- )

-- create table customer_profile (
-- 	customer_profile_id serial primary key,
-- 	description text not null,
-- 	foreign key(customer_profile_id) references customer (customer_id)
-- )

-- insert into customer (first_name, last_name)
-- values('Oryan', 'Malka')

-- insert into customer_profile (customer_profile_id, description)
-- values ((select customer_id from customer where customer_id = 1),'fat')


-- create table users (
-- 	customer_id integer not null,
-- 	customer_profile_id integer not null,
-- 	full_name varchar(50) not null,
-- 	primary key (customer_profile_id, customer_id),
-- 	foreign key (customer_id) references customer (customer_id) on update cascade,
-- 	foreign key (customer_profile_id) references customer_profile (customer_profile_id) on update cascade
-- )


-- insert into users (customer_id, customer_profile_id, full_name)
-- values ((select customer_id from customer where first_name = 'Ethan'),
-- 	   (select customer_profile_id from customer_profile where description = 'fat'),
-- 	   'Ethan Schwartz')

-- select * from users;