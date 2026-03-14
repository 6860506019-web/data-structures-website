CREATE DATABASE student_db;

USE student_db;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    major VARCHAR(100)
);

INSERT INTO students (name, age, major) VALUES
('Ali', 20, 'Computer Science'),
('Sara', 21, 'Information Technology'),
('John', 19, 'Software Engineering');