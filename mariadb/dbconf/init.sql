CREATE DATABASE IF NOT EXISTS qiish;

CREATE TABLE user_info(
    id int NOT NULL AUTO_INCREMENT,
    user_name varchar(18) NOT NULL,
    email text NOT NULL UNIQUE,
    engineer_type text NOT NULL,
    description text,
    image text,
    PRIMARY KEY (id)
);

CREATE TABLE user(
    user_info_id int NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    FOREIGN KEY fk_user_id(user_info_id) REFERENCES user_info(id) ON DELETE CASCADE
);

CREATE TABLE articles(
    id int NOT NULL AUTO_INCREMENT,
    user_info_id int NOT NULL,
    title varchar(50) NOT NULL,
    content text NOT NULL,
    posted_date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    FOREIGN KEY fk_articles_user_id(user_info_id) REFERENCES user_info(id) ON DELETE CASCADE
);

CREATE TABLE likes(
    id int NOT NULL AUTO_INCREMENT,
    user_info_id int NOT NULL,
    article_id int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY fk_likes_user_id(user_info_id) REFERENCES user_info(id) ON DELETE CASCADE,
    FOREIGN KEY fk_likes_article_id(article_id) REFERENCES articles(id) ON DELETE CASCADE
);

CREATE TABLE comments(
    id int NOT NULL AUTO_INCREMENT,
    article_id int NOT NULL,
    user_info_id int NOT NULL,
    comment text NOT NULL,
    comment_date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    FOREIGN KEY fk_comments_article_id(article_id) REFERENCES articles(id) ON DELETE CASCADE,
    FOREIGN KEY fk_comments_user_info_id(user_info_id) REFERENCES user_info(id) ON DELETE CASCADE
);

CREATE TABLE comment_likes(
    id int NOT NULL AUTO_INCREMENT,
    user_info_id int NOT NULL,
    comments_id int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY fk_comment_likes_user_info_id(user_info_id) REFERENCES user_info(id) ON DELETE CASCADE,
    FOREIGN KEY fk_comment_likes_comments_id(comments_id) REFERENCES comments(id) ON DELETE CASCADE
);

CREATE TABLE follow(
    id int NOT NULL AUTO_INCREMENT,
    user_info_id int NOT NULL,
    follow_user_info_id int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY fk_follow_user_id(user_info_id) REFERENCES user_info(id) ON DELETE CASCADE,
    FOREIGN KEY fk_follow_id(follow_user_info_id) REFERENCES user_info(id) ON DELETE CASCADE
);

CREATE TABLE tags(
    id int NOT NULL AUTO_INCREMENT,
    skill text NOT NULL,
    image text,
    PRIMARY KEY (id)
);

CREATE TABLE user_info_tags(
    user_info_id int NOT NULL,
    tag_id int NOT NULL,
    FOREIGN KEY fk_tags_user_id(user_info_id) REFERENCES user_info(id) ON DELETE CASCADE,
    FOREIGN KEY fk_user_tag_id(tag_id) REFERENCES tags(id) ON DELETE CASCADE
);

CREATE TABLE article_tags(
    article_id int NOT NULL,
    tag_id int NOT NULL,
    FOREIGN KEY fk_article_id(article_id) REFERENCES articles(id) ON DELETE CASCADE,
    FOREIGN KEY fk_article_tag_id(tag_id) REFERENCES tags(id) ON DELETE CASCADE
);