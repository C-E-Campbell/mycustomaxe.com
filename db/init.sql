CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email VARCHAR UNIQUE NOT NULL,
    password VARCHAR NOT NULL,
    isAdmin BOOLEAN,
    name VARCHAR UNIQUE NOT NULL);

INSERT INTO users(email, password, isAdmin)
VALUES('test@gtest.com', 'test', true, 'test');