SELECT id,
       name,
       email
from users
WHERE email = $1
    AND password = $2;