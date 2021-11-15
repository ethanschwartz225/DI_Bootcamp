-- EXERCISE XP: 

-- select * from language;

-- select film.title, film.description, language.name as lang
-- from film
-- left join language
-- on language.language_id = film.language_id

-- select film.title, film.description, language.name
-- from film
-- inner join language
-- on language.language_id = film.language_id

-- select * from language

-- create table new_film (
-- 	id serial primary key,
-- 	name varchar(50) not null
-- )

-- insert into new_film(name)
-- values('Forrest Gump'),('Happy Gilmore'), ('Pulp Fiction'), ('Fight Club')


-- CREATE TABLE movies(
-- movie_id SERIAL,
-- movie_title VARCHAR (50) NOT NULL,
-- movie_story TEXT,
-- actor_playing_id INTEGER,
-- PRIMARY KEY (movie_id),
-- FOREIGN KEY (actor_playing_id) REFERENCES actors (actor_id)
-- );

-- create table customer_review (
-- 	review_id serial primary key,
-- 	film_id integer not null,
-- 	language_id integer not null,
-- 	title varchar(50) not null,
-- 	score smallint not null,
-- 	review_text text not null,
-- 	last_update date not null,
-- 	foreign key (film_id) references new_film (id) on delete cascade,
-- 	foreign key (language_id) references language (language_id)
-- )

-- insert into customer_review (film_id, language_id, title, score, review_text, last_update)
-- values (2, 1, 'Happy Gilmore', 5, 'Very stupid.', '2006-01-05')

-- select * from customer_review

-- delete from new_film where name = 'Happy Gilmore'

-- select * from new_film;
-- select * from customer_review;

-- EXERCISE 2:

-- update film
-- set language_id = 2
-- where title like 'a%' ;

-- select * from film
-- where title like 'A%'

-- drop table customer_review
-- this is easy, no need for extra anything.

-- select rental_id, rental from rental

-- select count(rental_id)- count(return_date) from rental;

-- select rental.rental_id, payment.amount 
-- from rental
-- left join payment
-- on rental.rental_id = payment.rental_id
-- order by amount desc limit 30;

-- select rental.rental_id, rental.return_date, payment.amount 
-- from rental
-- left join payment
-- on rental.rental_id = payment.rental_id
-- where amount is not null
-- order by amount desc limit 30

-- select film.film_id, film.title, film.description, 
-- film_actor.actor_id,
-- actor.first_name, actor.last_name
-- from film
-- left join film_actor
-- on film.film_id = film_actor.film_id
-- left join actor
-- on film_actor.actor_id = actor.actor_id
-- where film.description ilike '%sumo%'
-- and actor.last_name ilike 'monroe' 
-- and actor.first_name ilike 'penelope'

-- select film.film_id, film.rating, film.length, film.description from film
-- where film.rating = 'R' and 
-- film.length <= 60 and
-- film.description ilike '%documentary%'

-- rented by Matthew Mahan, more than $4, returned between 28 july and august 1st 2005

-- select customer.first_name, customer.last_name, rental.return_date, payment.amount
-- from customer
-- left join rental
-- on customer.customer_id = rental.customer_id
-- left join payment
-- on rental.rental_id = payment.rental_id
-- where customer.first_name = 'Matthew' and
-- customer.last_name = 'Mahan' and 
-- rental.return_date between '2005-07-28' and '2005-08-01' and
-- payment.amount > 4

select customer.customer_id, customer.first_name, customer.last_name, film.title, film.description
from customer
left join film
on film.last_update = customer.last_update
where film.description = '%boat%'

-- i didn't understand the last question.

