SELECT first_name, last_name, email FROM employees
UNION
SELECT first_name, last_name, email FROM contacts;



SELECT first_name, last_name, email FROM employees
UNION
SELECT first_name, last_name, email FROM contacts
ORDER BY first_name, last_name;



SELECT last_name FROM employees
UNION ALL
SELECT last_name FROM contacts;



SELECT last_name FROM employees
INTERSECT
SELECT last_name FROM contacts;

SELECT last_name FROM contacts
MINUS
SELECT last_name FROM employees;


SELECT department_id FROM departments
MINUS
SELECT department_id FROM employees;


SELECT customer_id, COUNT(*) AS total_orders 
FROM orders 
GROUP BY customer_id;


SELECT order_id, SUM(unit_price * quantity) AS total_sales 
FROM order_items 
GROUP BY order_id;


SELECT category_id, AVG(list_price) AS avg_price 
FROM products 
GROUP BY category_id;



SELECT category_id, MAX(list_price) AS max_price 
FROM products 
GROUP BY category_id;


SELECT category_id, MIN(list_price) AS min_price 
FROM products 
GROUP BY category_id;


SELECT category_id, 
       COUNT(*) AS product_count, 
       AVG(list_price) AS avg_price, 
       MAX(list_price) AS max_price, 
       MIN(list_price) AS min_price, 
       SUM(list_price) AS total_price 
FROM products 
GROUP BY category_id;


SELECT customer_id, COUNT(*) AS shipped_orders 
FROM orders 
WHERE status = 'Shipped' 
GROUP BY customer_id;


SELECT EXTRACT(YEAR FROM order_date) AS order_year, COUNT(*) AS total_orders 
FROM orders 
GROUP BY EXTRACT(YEAR FROM order_date);


SELECT order_id, SUM(unit_price * quantity) AS total_value 
FROM order_items 
GROUP BY order_id 
HAVING SUM(unit_price * quantity) > 1000000;



SELECT order_id, SUM(unit_price * quantity) AS total_value, COUNT(*) AS item_count 
FROM order_items 
GROUP BY order_id 
HAVING SUM(unit_price * quantity) > 500000 
   AND COUNT(*) BETWEEN 10 AND 12;


   SELECT customer_id, COUNT(*) AS order_count 
FROM orders 
GROUP BY customer_id 
HAVING COUNT(*) > 5;


SELECT category_id, AVG(list_price) AS avg_price 
FROM products 
GROUP BY category_id 
HAVING AVG(list_price) > 1000;


SELECT customer_id, COUNT(*) AS total_orders 
FROM orders 
GROUP BY customer_id 
ORDER BY total_orders DESC;


SELECT category_id, SUM(quantity) AS total_inventory 
FROM inventories i
JOIN products p ON i.product_id = p.product_id
GROUP BY category_id 
HAVING SUM(quantity) > 500;



SELECT warehouse_name, SUM(quantity) AS total_quantity 
FROM warehouses w
JOIN inventories i ON w.warehouse_id = i.warehouse_id
GROUP BY warehouse_name;


SELECT o.sales_rep_id, SUM(i.unit_price * i.quantity) AS total_sales 
FROM orders o
JOIN order_items i ON o.order_id = i.order_id
GROUP BY o.sales_rep_id;


SELECT salesperson_id, SUM(order_total) AS total_sales 
FROM orders 
GROUP BY salesperson_id;


SELECT product_name, list_price, 
       (SELECT AVG(list_price) FROM products p2 WHERE p2.category_id = p1.category_id) AS avg_category_price 
FROM products p1;



SELECT first_name, last_name FROM employees 
WHERE employee_id IN (
    SELECT salesperson_id FROM orders 
    WHERE status = 'Shipped' AND EXTRACT(YEAR FROM order_date) = 2017
    GROUP BY salesperson_id 
    HAVING SUM(order_total) >= 1000000
);



SELECT first_name, last_name FROM employees 
WHERE employee_id IN (
    SELECT salesperson_id FROM orders 
    WHERE status = 'Shipped' AND EXTRACT(YEAR FROM order_date) = 2017
    GROUP BY salesperson_id 
    HAVING SUM(order_total) >= 1000000
);


SELECT customer_id, name FROM customers 
WHERE customer_id NOT IN (
    SELECT customer_id FROM orders 
    WHERE EXTRACT(YEAR FROM order_date) = 2017
);



SELECT c.customer_id, c.name FROM customers c 
WHERE EXISTS (
    SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id
);



UPDATE warehouses w
SET warehouse_name = warehouse_name || ', USA'
WHERE EXISTS (
    SELECT 1 FROM locations l 
    WHERE l.location_id = w.location_id AND l.country_id = 'US'
);


CREATE TABLE customers_2016 AS 
SELECT * FROM customers c
WHERE EXISTS (
    SELECT 1 FROM orders o 
    WHERE o.customer_id = c.customer_id AND SUBSTRING(o.order_date, 1, 4) = '2017'
);