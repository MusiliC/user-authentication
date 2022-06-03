 CREATE PROCEDURE forgotPassword
 @id varchar(50),
 @password varchar(150)
 AS
 BEGIN
   UPDATE users SET password = @password
	WHERE id = @id ;
 END