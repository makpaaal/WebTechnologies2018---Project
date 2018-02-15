CREATE TABLE `School` (
	`School_name` varchar(255),
	`School_address` varchar(255),
	`School_phone_number` varchar(255),
	`[Students]` varchar(255),
	`[Teachers]` varchar(255),
	`[Courses]` varchar(255),
	FOREIGN KEY(`[Students]`) REFERENCES `Student` (`Student_id`),
	FOREIGN KEY(`[Teachers]`) REFERENCES `Teacher` (`Teacher_id`),
	FOREIGN KEY(`[Courses]`) REFERENCES `Course` (`Course_id`)
);
CREATE TABLE `Student` (
	`Student_id` int PRIMARY KEY,
	`Student_name` varchar(255),
	`Level` varchar(255),
	`Date_of_birth` datetime,
	`Student_address` varchar(255),
	`[Tests]` varchar(255),
	`[Cources]` varchar(255),
	`[Certificates]` varchar(255),
	`[Teachers]` varchar(255),
	FOREIGN KEY(`[Tests]`) REFERENCES `Test` (`Test_id`),
	FOREIGN KEY(`[Cources]`) REFERENCES `Course` (`Course_id`),
	FOREIGN KEY(`[Certificates]`) REFERENCES `Certificate` (`Certificate_id`),
	FOREIGN KEY(`[Teachers]`) REFERENCES `Teacher` (`Teacher_id`)
);
CREATE TABLE `Teacher` (
	`Teacher_id` int PRIMARY KEY,
	`Teacher_name` varchar(255),
	`[Courses]` varchar(255),
	`[Tests]` varchar(255),
	`[Students]` varchar(255),
	FOREIGN KEY(`[Courses]`) REFERENCES `Course` (`Course_id`),
	FOREIGN KEY(`[Tests]`) REFERENCES `Test` (`Test_id`),
	FOREIGN KEY(`[Students]`) REFERENCES `Student` (`Student_id`)
);
CREATE TABLE `Course` (
	`Course_id` int,
	`Course_name` varchar(255),
	`Course_description` varchar(255),
	`[Students]` varchar(255),
	`[Teachers]` varchar(255),
	`Cost` varchar,
	`[Tests]` varchar(255),
	FOREIGN KEY(`[Students]`) REFERENCES `Student` (`Student_id`),
	FOREIGN KEY(`[Teachers]`) REFERENCES `Teacher` (`Teacher_id`),
	FOREIGN KEY(`[Tests]`) REFERENCES `Test` (`Test_id`)
);
CREATE TABLE `Test` (
	`Test_id` int,
	`Test_name` varchar(255),
	`Test_description` varchar(255),
	`[Students]` varchar(255),
	`Teacher` varchar(255),
	`Course` varchar(255),
	FOREIGN KEY(`[Students]`) REFERENCES `Student` (`Student_id`),
	FOREIGN KEY(`Teacher`) REFERENCES `Teacher` (`Teacher_id`),
	FOREIGN KEY(`Course`) REFERENCES `Course` (`Course_id`)
);
CREATE TABLE `Sale` (
	`Sale_id` int PRIMARY KEY,
	`[Course]` varchar(255),
	`Old_cost` varchar,
	`New_cost` varchar,
	`Expire_date` datetime,
	FOREIGN KEY(`[Course]`) REFERENCES `Course` (`Course_id`)
);
CREATE TABLE `Certificate` (
	`Certificate_id` int PRIMARY KEY,
	`Student` varchar(255),
	`Couse` varchar(255),
	`Teacher` varchar(255),
	FOREIGN KEY(`Student`) REFERENCES `Student` (`Student_id`),
	FOREIGN KEY(`Couse`) REFERENCES `Course` (`Course_id`),
	FOREIGN KEY(`Teacher`) REFERENCES `Teacher` (`Teacher_id`)
);
CREATE TABLE `Admin` (
	`School` varchar(255),
	FOREIGN KEY(`School`) REFERENCES `School` (`School_name`)
);