INSERT INTO users(email, password, name)
VALUES($1,
       $2,
       $3);


SELECT email
from users
WHERE email = $1;