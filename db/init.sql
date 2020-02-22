CREATE TABLE users( id SERIAL PRIMARY Key, 
    email VARCHAR UNIQUE NOT NULL,
    password VARCHAR NOT NULL,
    isAdmin BOOLEAN DEFAULT FALSE,
    name VARCHAR UNIQUE NOT NULL);

-- admins will be added manually
