CREATE TABLE user_info(
    id int NOT NULL AUTO_INCREMENT,
    user_name varchar(18),
    email text NOT NULL,
    engineer_type text,
    COMMENT text,
    PRIMARY KEY (id)
);

CREATE TABLE user(
    user_info_id int NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    user_name text NOT NULL,
    FOREIGN KEY fk_user_id(user_info_id) REFERENCES user_info(id) ON DELETE CASCADE
);

CREATE TABLE articles(
    id int NOT NULL AUTO_INCREMENT,
    user_info_id int NOT NULL,
    title varchar(50) NOT NULL,
    content text NOT NULL,
    posted_date date NOT NULL,
    FOREIGN KEY fk_articles_user_id(user_info_id) REFERENCES user_info(id) ON DELETE CASCADE,
    PRIMARY KEY(id)
);

CREATE TABLE likes(
    id int NOT NULL AUTO_INCREMENT,
    user_info_id int NOT NULL,
    article_id int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY fk_likes_user_id(user_info_id) REFERENCES user_info(id) ON DELETE CASCADE,
    FOREIGN KEY fk_likes_article_id(article_id) REFERENCES articles(id) ON DELETE CASCADE
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
    article_id int NOT NULL,
    skill text NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY fk_tag_article_id(article_id) REFERENCES articles(id) ON DELETE CASCADE
);

CREATE TABLE user_info_tags(
    id int NOT NULL AUTO_INCREMENT,
    user_info_id int NOT NULL,
    tag_id int NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY fk_tags_user_id(user_info_id) REFERENCES user_info(id) ON DELETE CASCADE,
    FOREIGN KEY fk_tags_id(tag_id) REFERENCES tags(id) ON DELETE CASCADE
);

CREATE TABLE article_tags(
    id int NOT NULL AUTO_INCREMENT,
    article_id int NOT NULL,
    tag_id int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY fk_article_id(article_id) REFERENCES articles(id) ON DELETE CASCADE,
    FOREIGN KEY fk_articles_tag_id(tag_id) REFERENCES tags(id) ON DELETE CASCADE
);