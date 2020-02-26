CREATE TABLE users( id SERIAL PRIMARY KEY, 
    email VARCHAR UNIQUE NOT NULL,
    password VARCHAR NOT NULL,
    isAdmin BOOLEAN DEFAULT FALSE,
    name VARCHAR UNIQUE NOT NULL);

-- admins will be added manually

CREATE TABLE guitars(id SERIAL PRIMARY KEY,
brand VARCHAR ,
pickups VARCHAR ,
body VARCHAR,
neck  VARCHAR,
tuners VARCHAR,
electronics VARCHAR,
misc VARCHAR,
creator VARCHAR
)