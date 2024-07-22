import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  multipleStatements: true,
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to database");
});

const setup = () => {
  db.query(
    `
        SET FOREIGN_KEY_CHECKS=0;
        DROP TABLE IF EXISTS users;
        DROP TABLE IF EXISTS roles;
        SET FOREIGN_KEY_CHECKS=1;
        CREATE TABLE roles (
            id BIGINT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(50) NOT NULL
        );
        CREATE TABLE users (
            id BIGINT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(50) NOT NULL UNIQUE,
            firstname VARCHAR(50),
            lastname VARCHAR(50),
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(250) NOT NULL,
            role_id BIGINT NOT NULL,
            birth_date DATE,
            image TEXT DEFAULT "../uploads/20221011_083931.jpg",
            FOREIGN KEY (role_id) REFERENCES roles(id)
        );
    `,
    (error, results, fields) => {
      if (error) throw error;
    }
  );

  db.query(
    `
        INSERT INTO roles (id, name) VALUES (1, 'admin');
        INSERT INTO roles (id, name) VALUES (2, 'user');
        INSERT INTO roles (id, name) VALUES (3, 'super-admin');
        INSERT INTO users (username, firstname, lastname, email, password, role_id)
        VALUES
        ('Mario51', 'Mario', 'Rossi', 'mario.rossi@email.com', '12345', 2),
        ('Dracula945', 'Luigi', 'Verdi', 'luigi.verdi@email.com', '54321', 2),
        ('ILoveBiking', 'MariaChaira', 'Andreini', 'mariachiara.andreini@email.com', '98765', 2);
    `,
    (error, results, fields) => {
      if (error) throw error;
    }
  );
};

// setup();

export { db };


