
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE saved_cocktails (
    id serial PRIMARY KEY,
    user_id INT,
    cocktail_name VARCHAR(255),
    image TEXT,
    instructions TEXT,
    ingredient1 VARCHAR(255),
    measure1 VARCHAR(50),
    ingredient2 VARCHAR(255),
    measure2 VARCHAR(50),
    ingredient3 VARCHAR(255),
    measure3 VARCHAR(50),
    ingredient4 VARCHAR(255),
    measure4 VARCHAR(50),
    ingredient5 VARCHAR(255),
    measure5 VARCHAR(50),
    ingredient6 VARCHAR(255),
    measure6 VARCHAR(50),
    ingredient7 VARCHAR(255),
    measure7 VARCHAR(50),
    ingredient8 VARCHAR(255),
    measure8 VARCHAR(50),
    ingredient9 VARCHAR(255),
    measure9 VARCHAR(50),
    ingredient10 VARCHAR(255),
    measure10 VARCHAR(50),
    ingredient11 VARCHAR(255),
    measure11 VARCHAR(50),
    ingredient12 VARCHAR(255),
    measure12 VARCHAR(50)
);