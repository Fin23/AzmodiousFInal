DROP DATABASE IF EXISTS azmodaious_DB;
CREATE DATABASE azmodaious_DB;

USE azmodaious_DB;

CREATE TABLE `skills`(
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `strength`  VARCHAR(30) NOT NULL,
  `dexterity`  VARCHAR(30) NOT NULL,
  `constitution`  VARCHAR(30) NOT NULL,
  `intelligence`  VARCHAR(30) NOT NULL,
  `wisdom`  VARCHAR(30) NOT NULL,
  `charisma`  VARCHAR(30) NOT NULL,


  PRIMARY KEY (`id`)
  
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;



use azmodaious_DB
   
 



  (2, 'Orange', 1, 1.00, 90),
  (3, 'Bananas', 1, 1.50, 80),
  
  (4, '4-K Samsung TV', 2, 499.99, 25),
  (5,'Play-Station 4', 2, 299.99, 10),
  (6,'Nintendo Switch', 2, 199.99, 5),
  
  (7, 'Soap', 3, 6.00, 75),
  (8, 'ToothPaste', 3, 4.25, 45),
  (9, 'Toilet-Paper', 3, 15.50, 45);

