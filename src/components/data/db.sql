CREATE TABLE `USERS`(
    id int(255) AUTO_INCREMENT PRIMARY KEY,
    username varchar(255),
    email varchar(255) unique,
    password varchar(255),
    photo varchar(255),
    verificationCode varchar(255),
    emailVerifiedAt date DEFAULT null,
    favoriteTeam varchar(255),
    resetCode varchar(255)
);
