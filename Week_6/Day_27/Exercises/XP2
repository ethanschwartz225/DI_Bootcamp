-- select * from customer;

-- select concat(first_name, ' ',last_name) as full_name from customer;

-- select concat(first_name, ' ',last_name) as full_name, create_date from customer;

-- select * from customer order by first_name desc;

-- select film_id, title, description, release_year, rental_rate from film order by rental_rate;

-- select address, phone from address where district = 'Texas';

-- select * from film where film_id = 15 or film_id = 150;

-- select film_id, title, description, length, rental_rate from film where title = 'Inglorious Basterds';

-- select film_id, title, description, length, rental_rate from film where title ilike 'in%';

-- select title, rental_rate from film order by rental_rate
-- fetch first 10 rows only;

-- select title, rental_rate from film order by rental_rate
-- fetch first 10 rows only
-- where row > 10;

-- select amount, payment_date, payment.customer_id
-- from payment
-- inner join customer
-- on customer.customer_id = payment.customer_id

-- select inventory.film_id, film.film_id
-- from film
-- inner join inventory
-- on inventory.film_id != film.film_id

-- select country.country, city.city
-- from city
-- inner join country
-- on country.country_id = city.country_id;

-- BONUS:

-- select staff.staff_id, concat(staff.first_name, staff.last_name) as full_name, payment.amount, payment.payment_date
-- from staff
-- inner join payment
-- on payment.staff_id = staff.staff_id
-- order by staff_id
