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
    visited_count int NOT NULL DEFAULT 0,
    update_date datetime,
    PRIMARY KEY(id),
    FOREIGN KEY fk_articles_user_id(user_info_id) REFERENCES user_info(id) ON DELETE CASCADE
);

CREATE TABLE likes(
    id int NOT NULL AUTO_INCREMENT,
    user_info_id int NOT NULL,
    article_id int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY fk_likes_user_id(user_info_id) REFERENCES user_info(id) ON DELETE CASCADE,
    FOREIGN KEY fk_likes_article_id(article_id) REFERENCES articles(id) ON DELETE CASCADE,
    UNIQUE (user_info_id, article_id)
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
    FOREIGN KEY fk_comment_likes_comments_id(comments_id) REFERENCES comments(id) ON DELETE CASCADE,
    UNIQUE (user_info_id, comments_id)
);

CREATE TABLE follow(
    id int NOT NULL AUTO_INCREMENT,
    user_info_id int NOT NULL,
    follow_user_info_id int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY fk_follow_user_id(user_info_id) REFERENCES user_info(id) ON DELETE CASCADE,
    FOREIGN KEY fk_follow_id(follow_user_info_id) REFERENCES user_info(id) ON DELETE CASCADE,
    UNIQUE (user_info_id, follow_user_info_id)
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
    FOREIGN KEY fk_user_tag_id(tag_id) REFERENCES tags(id) ON DELETE CASCADE,
    UNIQUE (user_info_id, tag_id)
);

CREATE TABLE article_tags(
    article_id int NOT NULL,
    tag_id int NOT NULL,
    FOREIGN KEY fk_article_id(article_id) REFERENCES articles(id) ON DELETE CASCADE,
    FOREIGN KEY fk_article_tag_id(tag_id) REFERENCES tags(id) ON DELETE CASCADE,
    UNIQUE (article_id, tag_id)
);

INSERT INTO
    user_info(
        user_name,
        email,
        engineer_type,
        description
    )
VALUES
    ('qiish', 'sample@qiish.com', 'WEB', 'hello');

INSERT INTO
    user_info(
        user_name,
        email,
        engineer_type,
        description
    )
VALUES
    ('zenn', 'sample@zenn.com', 'FR', 'Hej!');

INSERT INTO
    user_info(
        user_name,
        email,
        engineer_type,
        description
    )
VALUES
    ('qiita', 'sample@qiita.com', 'CL', 'hei');

INSERT INTO
    user(user_info_id, email, password)
VALUES
    (1, 'sample@qiish.com', 'qiish');

INSERT INTO
    user(user_info_id, email, password)
VALUES
    (2, 'sample@zenn.com', 'zenn');

INSERT INTO
    user(user_info_id, email, password)
VALUES
    (3, 'sample@qiita.com', 'qiita');

INSERT INTO
    tags(skill)
VALUES
    ('HTML');

INSERT INTO
    tags(skill)
VALUES
    ('CSS');

INSERT INTO
    tags(skill)
VALUES
    ('JavaScript');

INSERT INTO
    tags(skill)
VALUES
    ('jQuery');

INSERT INTO
    tags(skill)
VALUES
    ('React');

INSERT INTO
    tags(skill)
VALUES
    ('Angular');

INSERT INTO
    tags(skill)
VALUES
    ('Vue');

INSERT INTO
    tags(skill)
VALUES
    ('TypeScript');

INSERT INTO
    tags(skill)
VALUES
    ('CoffeeScript');

INSERT INTO
    tags(skill)
VALUES
    ('C');

INSERT INTO
    tags(skill)
VALUES
    ('C+');

INSERT INTO
    tags(skill)
VALUES
    ('C#');

INSERT INTO
    tags(skill)
VALUES
    ('Java');

INSERT INTO
    tags(skill)
VALUES
    ('Ruby');

INSERT INTO
    tags(skill)
VALUES
    ('PHP');

INSERT INTO
    tags(skill)
VALUES
    ('Phyton');

INSERT INTO
    tags(skill)
VALUES
    ('Objective-C');

INSERT INTO
    tags(skill)
VALUES
    ('Perl');

INSERT INTO
    tags(skill)
VALUES
    ('Node.js');

INSERT INTO
    tags(skill)
VALUES
    ('Swift');

INSERT INTO
    tags(skill)
VALUES
    ('kotolin');

INSERT INTO
    user_info_tags(user_info_id, tag_id)
VALUES
    (1, 1);

INSERT INTO
    user_info_tags(user_info_id, tag_id)
VALUES
    (1, 2);

INSERT INTO
    user_info_tags(user_info_id, tag_id)
VALUES
    (2, 2);

INSERT INTO
    user_info_tags(user_info_id, tag_id)
VALUES
    (3, 3);

INSERT INTO
    follow(user_info_id, follow_user_info_id)
VALUES
    (1, 2);

INSERT INTO
    follow(user_info_id, follow_user_info_id)
VALUES
    (1, 3);

INSERT INTO
    articles(user_info_id, title, content)
VALUES
    (1, 'About HTML', 'HTML is mark up language');

INSERT INTO
    articles(user_info_id, title, content)
VALUES
    (
        2,
        'About Python',
        'Python used for Machine Larning'
    );

INSERT INTO
    article_tags(article_id, tag_id)
VALUES
    (1, 1);

INSERT INTO
    article_tags(article_id, tag_id)
VALUES
    (1, 3);

INSERT INTO
    article_tags(article_id, tag_id)
VALUES
    (2, 2);

INSERT INTO
    likes(user_info_id, article_id)
VALUES
    (2, 1);

INSERT INTO
    comments(article_id, user_info_id, comment)
VALUES
    (1, 3, 'I agree.');

INSERT INTO
    comment_likes(user_info_id, comments_id)
VALUES
    (1, 1);