-- DAILY CHALLENGE NOV 10:

-- create table orders (
-- 	order_id serial primary key,
-- 	first_name varchar(50) not null,
-- 	last_name varchar(50) not null
-- )

-- create table items (
-- 	item_id serial primary key,
-- 	item_name varchar(50) not null,
-- 	item_price smallint not null,
-- 	item_order_id integer not null,
-- 	foreign key (item_order_id) references orders(order_id) on delete cascade
-- );

-- insert into orders (first_name, last_name)
-- values ('Ethan', 'Schwartz'), ('Jeremy', 'Reiner'), ('Oryan', 'Malka');

-- insert into items (item_name, item_price, item_order_id)
-- values ('Banana', 50, 1),('Beer', 20, 1)

-- select orders.order_id, items.item_order_id, orders.last_name, items.item_name
-- from items
-- left join orders
-- on orders.order_id = items.item_order_id

-- select sum(items.item_price)
-- from items
-- left join orders
-- on orders.order_id = items.item_order_id;
