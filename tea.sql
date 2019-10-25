SET NAMES UTF8;
DROP DATABASE IF EXISTS tea;
CREATE DATABASE tea CHARSET=UTF8;
USE tea;

/* 用户信息 */
CREATE TABLE tea_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(32),
	upwd VARCHAR(32),
	email VARCHAR(64),
	phone VARCHAR(16),
	user_name VARCHAR(32), 
	gender INT 
);

/* 数据导入 */
/* 用户信息 */
INSERT INTO tea_user VALUES
(NULL, 'doudou', '123456', 'dou@qq.com', '13501234569', '窦志强', '1'),
(NULL, 'yaya', '123456', 'ya@qq.com', '13501234560', '秦小雅', '0');