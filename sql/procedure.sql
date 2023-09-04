CREATE PROCEDURE addUser(
    IN email VARCHAR(255),
    IN password VARCHAR(255),
    IN type VARCHAR(255)
) 
BEGIN
 INSERT INTO users (email, password, type)
 VALUES (email, password, type);
END ;

CALL addUser('siam@gmail.com', 'onwave@siam', 'regular');