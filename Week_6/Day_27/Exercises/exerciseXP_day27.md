-- create table customers (
-- 	customer_id serial primary key,
-- 	customer_first_name varchar(50) not null,
-- 	customer_last_name varchar(50) not null
-- )

-- insert into customers (customer_first_name, customer_last_name)
-- values('Greg', 'Jones'), ('Sandra', 'Jones'), ('Scott','Scott'), ('Trevor', 'Green'),('Melanie', 'Johnson');

-- create table items (
-- 	item_id serial primary key,
-- 	item_name varchar(50) not null,
-- 	item_price smallint not null
-- )

-- insert into items (item_name, item_price)
-- values('Large Desk', 300), ('Small Desk', 100), ('Fan', 80);

-- EXERCISE 1:
-- 1.
-- select * from items order by item_price;
-- select * from items order by item_price desc;
-- select * from customers order by customer_first_name limit 3;
-- select customer_last_name from customers order by customer_last_name desc;

-- 2.
-- create table purchases (
-- 	customer_id integer,
-- 	item_id integer,
-- 	foreign key (customer_id) references customers (customer_id),
-- 	foreign key (item_id) references items (item_id)
-- )

-- insert into purchases (customer_id, item_id)
-- values(3, 4)
 
-- 3. 
-- select * from purchases;

-- select customers.customer_id, items.item_id from purchases
-- left join customers on customers.customer_id = purchases.customer_id
-- left join items on items.item_id = purchases.item_id;

-- select purchases.item_id from purchases where purchases.customer_id = 4;

-- select item_id from purchases where item_id = 1 or item_id = 2;

-- insert into items (item_name, item_price)
-- values ('Hard Drive', 20)

-- select * from purchases;

-- select customers.customer_first_name from purchases
-- left join customers on customers.customer_id = purchases.customer_id;

-- select customers.customer_first_name, customers.customer_last_name, items.item_name from purchases
-- left join items on items.item_id = purchases.item_id
-- left join customers on customers.customer_id = purchases.customer_id;

-- EXERCISE 2:
