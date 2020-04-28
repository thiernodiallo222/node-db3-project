-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

       SELECT p.ProductName, 
       c.CategoryName
       FROM Product as p
       JOIN Category as c ON p.CategoryId = c.id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
 SELECT o.id AS Order_Id, 
	s.CompanyName AS Shipper_Name,
	o.OrderDate As Oder_Date
	FROM "Order" as o
    INNER JOIN "Shipper" as s
    ON o.ShipVia= s.id
    WHERE o.OrderDate < "2012-08-09";

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
   SELECT o.ShipName AS ProductName,
    od.Quantity 
    FROM "Order" AS o
	JOIN OrderDetail AS od
	ON o.Id = od.OrderId
    WHERE od.OrderId =10251
    Order By o.id ASC;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
        SELECT o.id As Order_Id, 
        c.CompanyName AS CompanyName, 
        e.LastName As EmpLanstName
        FROM "Order" AS o
        JOIN Customer AS c ON o.CustomerId = c.Id
        JOIN Employee AS e ON o.EmployeeId = e.Id;