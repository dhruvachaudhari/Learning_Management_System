
//  1 User

// CREATE TABLE `user` (
//     `iduser` int NOT NULL AUTO_INCREMENT,
//     `username` varchar(16) NOT NULL,
//     `email` varchar(255) NOT NULL,
//     `password` varchar(32) NOT NULL,
//     `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
//     PRIMARY KEY (`iduser`),
//     UNIQUE KEY `iduser_UNIQUE` (`iduser`)
//   ) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



// 2 Trainning Programs


// CREATE TABLE `training_programs` (
//   `id` int NOT NULL AUTO_INCREMENT,
//   `name` varchar(255) NOT NULL,
//   `description` text,
//   `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


// 3 Question

// CREATE TABLE `questions` (
//   `id` int NOT NULL AUTO_INCREMENT,
//   `resource_id` int DEFAULT NULL,
//   `question_text` text,
//   `options` json DEFAULT NULL,
//   `correct_answer` json DEFAULT NULL,
//   `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
//   PRIMARY KEY (`id`),
//   KEY `resource_id` (`resource_id`),
//   CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`resource_id`) REFERENCES `learning_resources` (`id`) ON DELETE CASCADE
// )





//4 learning resources

//CREATE TABLE `learning_resources` (
//     `id` int NOT NULL AUTO_INCREMENT,
//     `title` varchar(255) NOT NULL,
//     `vid_link` varchar(255) NOT NULL,
//     `description` text,
//     `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
//     `trainning_id` int DEFAULT NULL,
//     PRIMARY KEY (`id`),
//     KEY `trainning_id_idx` (`trainning_id`),
//     CONSTRAINT `trainning_id` FOREIGN KEY (`trainning_id`) REFERENCES `training_programs` (`id`)
//   )


// 5 Certificates

// CREATE TABLE `certificates` (
//     `id` int NOT NULL AUTO_INCREMENT,
//     `user_id` int DEFAULT NULL,
//     `program_id` int DEFAULT NULL,
//     `certificate_url` varchar(255) DEFAULT NULL,
//     `date_awarded` datetime DEFAULT CURRENT_TIMESTAMP,
//     PRIMARY KEY (`id`),
//     KEY `program_id` (`program_id`),
//     KEY `user_id_idfk_3_idx` (`user_id`),
//     CONSTRAINT `certificates_ibfk_2` FOREIGN KEY (`program_id`) REFERENCES `training_programs` (`id`) ON DELETE CASCADE,
//     CONSTRAINT `user_id_idfk_3` FOREIGN KEY (`user_id`) REFERENCES `user` (`iduser`) ON DELETE CASCADE
//   )


//6 user progress

// CREATE TABLE `user_progress` (
//     `id` int NOT NULL AUTO_INCREMENT,
//     `user_id` int DEFAULT NULL,
//     `program_id` int DEFAULT NULL,
//     `completed_modules` int DEFAULT NULL,
//     `total_modules` int DEFAULT NULL,
//     `is_completed` tinyint(1) DEFAULT '0',
//     `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
//     PRIMARY KEY (`id`),
//     KEY `program_id` (`program_id`),
//     KEY `user_prgress_idfk_3_idx` (`user_id`),
//     CONSTRAINT `user_prgress_idfk_3` FOREIGN KEY (`user_id`) REFERENCES `user` (`iduser`) ON DELETE CASCADE,
//     CONSTRAINT `user_progress_ibfk_2` FOREIGN KEY (`program_id`) REFERENCES `training_programs` (`id`) ON DELETE CASCADE
//   )


//7 user quiz attempt

// CREATE TABLE `user_quiz_attempts` (
//     `id` int NOT NULL AUTO_INCREMENT,
//     `user_id` int DEFAULT NULL,
//     `program_id` int DEFAULT NULL,
//     `resource_id` int DEFAULT NULL,
//     `score` int DEFAULT NULL,
//     `attempt_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
//     PRIMARY KEY (`id`),
//     KEY `user_id` (`user_id`),
//     KEY `resource_id` (`resource_id`),
//     KEY `user_quiz_attempts_ibfk_3_idx` (`program_id`),
//     CONSTRAINT `user_quiz_attempts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`iduser`),
//     CONSTRAINT `user_quiz_attempts_ibfk_2` FOREIGN KEY (`resource_id`) REFERENCES `learning_resources` (`id`),
//     CONSTRAINT `user_quiz_attempts_ibfk_3` FOREIGN KEY (`program_id`) REFERENCES `training_programs` (`id`)
//   )


// 8 User Response

// CREATE TABLE `user_responses` (
//     `id` int NOT NULL AUTO_INCREMENT,
//     `user_id` int DEFAULT NULL,
//     `question_id` int DEFAULT NULL,
//     `response` varchar(255) DEFAULT NULL,
//     `is_correct` tinyint(1) DEFAULT NULL,
//     `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
//     PRIMARY KEY (`id`),
//     KEY `question_id` (`question_id`),
//     KEY `user_id_ibfk_3_idx` (`user_id`),
//     CONSTRAINT `user_id_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `user` (`iduser`) ON DELETE CASCADE,
//     CONSTRAINT `user_responses_ibfk_2` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE
//   )
