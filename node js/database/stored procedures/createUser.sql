 CREATE PROCEDURE createUser
 @id varchar(50),
 
 @username varchar(50),
 @phone varchar(50),
 @email varchar(50),
 @password varchar(150)

 AS
 BEGIN
    IF NOT EXISTS (SELECT * FROM users 
                   WHERE username = @username
                   AND email = @email)
BEGIN
 INSERT INTO users(id, username,phone, email, password)
 VALUES(@id,@username,@phone,@email,@password)
 END
 END