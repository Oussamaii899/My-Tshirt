CREATE TABLE `USERS`(
    id int(255) AUTO_INCREMENT PRIMARY KEY,
    username varchar(255),
    email varchar(255) unique,
    password varchar(255),
    photo varchar(255),
    verificationCode varchar(255),
    emailVerifiedAt date DEFAULT null,
    favoriteTeam varchar(255),

);
CREATE TABLE password_resets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    token VARCHAR(255) NOT NULL,
    expires_at DATETIME NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES USERS(id) ON DELETE CASCADE
);
