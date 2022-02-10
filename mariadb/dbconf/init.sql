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
    article_status boolean NOT NULL,
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
    tag_order int NOT NULL,
    FOREIGN KEY fk_tags_user_id(user_info_id) REFERENCES user_info(id) ON DELETE CASCADE,
    FOREIGN KEY fk_user_tag_id(tag_id) REFERENCES tags(id) ON DELETE CASCADE,
    UNIQUE (user_info_id, tag_id)
);

CREATE TABLE article_tags(
    article_id int NOT NULL,
    tag_id int NOT NULL,
    tag_order int NOT NULL,
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
    user_info(
        user_name,
        email,
        engineer_type,
        description
    )
VALUES
    ('No4', 'no4@qiita.com', 'FR', 'www');
    
INSERT INTO
    user_info(
        user_name,
        email,
        engineer_type,
        description
    )
VALUES
    ('No5', 'no5@qiita.com', 'WEB', 'wow');

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
    user(user_info_id, email, password)
VALUES
    (4, 'no4@qiita.com', 'test');
    
INSERT INTO
    user(user_info_id, email, password)
VALUES
    (5, 'no5@qiita.com', 'test1');

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
    tags(skill)
VALUES
    ('AWS');

INSERT INTO
    tags(skill)
VALUES
    ('Unity');

INSERT INTO
    tags(skill)
VALUES
    ('Linux');

INSERT INTO
    tags(skill)
VALUES
    ('Ubuntu');

INSERT INTO
    tags(skill)
VALUES
    ('WordPress');

INSERT INTO
    tags(skill)
VALUES
    ('PostgreSQL');

INSERT INTO
    tags(skill)
VALUES
    ('Flutter');

INSERT INTO
    tags(skill)
VALUES
    ('Excel');

INSERT INTO
    tags(skill)
VALUES
    ('Xcode');

INSERT INTO
    tags(skill)
VALUES
    ('Windows');

INSERT INTO
    tags(skill)
VALUES
    ('Laravel');

INSERT INTO
    tags(skill)
VALUES
    ('PHP');

INSERT INTO
    tags(skill)
VALUES
    ('Mac');

INSERT INTO
    tags(skill)
VALUES
    ('iOS');

INSERT INTO
    tags(skill)
VALUES
    ('MySQL');

INSERT INTO
    tags(skill)
VALUES
    ('MariaDB');

INSERT INTO
    tags(skill)
VALUES
    ('MongoDB');

INSERT INTO
    tags(skill)
VALUES
    ('GitHub');

INSERT INTO
    tags(skill)
VALUES
    ('EC2');

INSERT INTO
    tags(skill)
VALUES
    ('CentOS');

INSERT INTO
    tags(skill)
VALUES
    ('Docker');

INSERT INTO
    tags(skill)
VALUES
    ('Heroku');

INSERT INTO
    tags(skill)
VALUES
    ('TensorFlow');

INSERT INTO
    tags(skill)
VALUES
    ('GCP');

INSERT INTO
    tags(skill)
VALUES
    ('pandas');

INSERT INTO
    tags(skill)
VALUES
    ('JSON');

INSERT INTO
    tags(skill)
VALUES
    ('nuxt.js');

INSERT INTO
    tags(skill)
VALUES
    ('next.js');

INSERT INTO
    tags(skill)
VALUES
    ('numpy');

INSERT INTO
    tags(skill)
VALUES
    ('Dart');

INSERT INTO
    tags(skill)
VALUES
    ('eclipse');

INSERT INTO
    tags(skill)
VALUES
    ('Flask');

INSERT INTO
    tags(skill)
VALUES
    ('Django');

INSERT INTO
    tags(skill)
VALUES
    ('Bootstrap');

INSERT INTO
    tags(skill)
VALUES
    ('VScode');

INSERT INTO
    tags(skill)
VALUES
    ('Firebase');

INSERT INTO
    tags(skill)
VALUES
    ('Tailwind CSS');

INSERT INTO
    tags(skill)
VALUES
    ('S3');

INSERT INTO
    tags(skill)
VALUES
    ('AngularJS');

INSERT INTO
    tags(skill)
VALUES
    ('API');

INSERT INTO
    user_info_tags(user_info_id, tag_id, tag_order)
VALUES
    (1, 1, 1);

INSERT INTO
    user_info_tags(user_info_id, tag_id, tag_order)
VALUES
    (1, 2, 2);

INSERT INTO
    user_info_tags(user_info_id, tag_id, tag_order)
VALUES
    (2, 2, 1);

INSERT INTO
    user_info_tags(user_info_id, tag_id, tag_order)
VALUES
    (3, 3, 1);

INSERT INTO
    follow(user_info_id, follow_user_info_id)
VALUES
    (1, 2);

INSERT INTO
    follow(user_info_id, follow_user_info_id)
VALUES
    (1, 3);

INSERT INTO
    articles(user_info_id, title, content, article_status)
VALUES
    (
        1,
        'About HTML',
        'HTML is mark up language',
        TRUE
    );

INSERT INTO
    articles(user_info_id, title, content, article_status)
VALUES
    (
        2,
        'About Python',
        'Python used for Machine Larning',
        TRUE
    );

INSERT INTO
    articles(user_info_id, title, content, article_status)
VALUES
    (1, 'This is Title', '# About Content', FALSE);
    
INSERT INTO
    articles(user_info_id, title, content, article_status)
VALUES
    (
        2,
        '4つ目',
        'Python used for Machine Larning',
        TRUE
    );

INSERT INTO
    articles(user_info_id, title, content, article_status)
VALUES
    (1, 'No5', '# About Content', FALSE);
INSERT INTO
    articles(user_info_id, title, content, article_status)
VALUES
    (
        2,
        'python python',
        'Python used for Machine Larning',
        TRUE
    );

INSERT INTO
    articles(user_info_id, title, content, article_status)
VALUES
    (1, '7', '# About Content', FALSE);
INSERT INTO
    articles(user_info_id, title, content, article_status)
VALUES
    (
        2,
        'kimestunoyaiba',
        'Python used for Machine Larning',
        TRUE
    );

INSERT INTO
    articles(user_info_id, title, content, article_status)
VALUES
    (1, 'tanjiro', '# About Content', FALSE);
INSERT INTO
    articles(user_info_id, title, content, article_status)
VALUES
    (
        2,
        'nezuko',
        'Python used for Machine Larning',
        TRUE
    );

INSERT INTO
    articles(user_info_id, title, content, article_status)
VALUES
    (1, 'zenitsu', '# About Content', FALSE);
INSERT INTO
    articles(user_info_id, title, content, article_status)
VALUES
    (
        3,
        'ikosuke',
        'Ruby used for creating WebSite',
        TRUE
    );

INSERT INTO
    articles(user_info_id, title, content, article_status)
VALUES
    (3, 'akaza', "//  # h1 ## h2 ### h3 #### h4", FALSE);
    
INSERT INTO
    articles(user_info_id, visited_count, title, content, article_status)
VALUES
    (3, 99, 'markdountest', "// Qiish_Markdown

// midashi

# h1
## h2
### h3
#### h4

// pre

```
pre
```

// inyo

> blockquote

// nizyuinyo

>> blockquote

// 箇条書きリスト

- list1
    - nest list1_1
        - nest list1_1_1
        - nest nest1_1_2
    - list list1_2
- list2
- list3

// bangotukilist

1. bangotukilist1
    1. bangotukilist1_1
    1. bangotukilist1_2
1. bangotukilist2
1. bangotukilist3


// Code

fuga install is `npm install fuga`

// em tag

normal *italic* normal
normal _italic_ normal

// strong(strongtag)

normal **bold** normal
normal __bold__ normal

// strong(emtag + strongtag)

normal ***bold*** normal
normal ___bold___ 通常normal

// horizonline

***

___

---

*    *    *

// link
[markdown sankoukiji](https://qiita.com/Qiita/items/c686397e4a0f4f11683d)



# GFM sample
(https://github.com/remarkjs/remark-gfm)
## Autolink literals

www.example.com, https://example.com, and contact@example.com.

## Footnote

A note[^1]

[^1]: Big note.

## Strikethrough

~one~ or ~~two~~ tildes.

## Table

| a | b  |  c |  d  |
| - | :- | -: | :-: |
| e | f  |  g |  h  |

## Tasklist

* [ ] to do
* [x] done", FALSE);

INSERT INTO
    articles(user_info_id, title, content, article_status)
VALUES
    (1, 'muzan', '# About Content', FALSE);
INSERT INTO
    articles(user_info_id, title, content, article_status)
VALUES
    (
        2,
        'kokusjibo',
        'Python used for Machine Larning',
        TRUE
    );

INSERT INTO
    articles(user_info_id, title, content, article_status)
VALUES
    (1, 'doma', '# About Content', FALSE);
INSERT INTO
    articles(user_info_id, title, content, article_status)
VALUES
    (
        2,
        'hantengu',
        'Python used for Machine Larning',
        TRUE
    );

INSERT INTO
    articles(user_info_id, title, content, article_status)
VALUES
    (1, 'gyokko', '# About Content', FALSE);
INSERT INTO
    articles(user_info_id, title, content, article_status)
VALUES
    (
        2,
        'daki',
        'Python used for Machine Larning',
        TRUE
    );

INSERT INTO
    articles(user_info_id, title, content, article_status)
VALUES
    (1, 'genya', '# About Content', FALSE);
INSERT INTO
    articles(user_info_id, title, content, article_status)
VALUES
    (
        2,
        'kanawo',
        'Python used for Machine Larning',
        TRUE
    );

INSERT INTO
    articles(user_info_id, title, content, article_status)
VALUES
    (1, 'giyu', '# About Content', FALSE);
INSERT INTO
    articles(user_info_id, title, content, article_status)
VALUES
    (
        2,
        'About Python',
        'Python used for Machine Larning',
        TRUE
    );

INSERT INTO
    articles(user_info_id, title, content, article_status)
VALUES
    (1, 'sinobu', '# About Content', FALSE);
    
INSERT INTO
    articles(user_info_id, title, content, article_status)
VALUES
    (
        2,
        'rengoku',
        'Python used for Machine Larning',
        TRUE
    );

INSERT INTO
    articles(user_info_id, title, content, article_status)
VALUES
    (1, 'uzui', '# test', FALSE);
    
INSERT INTO
    articles(user_info_id, title, content, article_status)
VALUES
    (1, 'HTML', '# HTML TEST', FALSE),
    (1, 'CSS', '# CSS TEST', TRUE),
    (1, 'JS', '# JS LOVE', FALSE),
    (1, 'JQuery', '# JQuery TEST', TRUE),
    (1, 'React', '# React LOVE', TRUE),
    (2, 'Angular', '# Angular LOVE', FALSE),
    (2, 'Vue', '# Vue LOVE', TRUE),
    (2, 'TypeScript', '# TypeScript', TRUE),
    (2, 'CoffeeScript', '# CoffeeScript', False),
    (2, 'C', '# C LOVE', False),
    (3, 'C+', '# C+ t', TRUE),
    (3, 'C#', '# C# good', TRUE),
    (3, 'Java', '# Java love', TRUE),
    (3, 'Ruby', '# Ruby GoodBye', TRUE),
    (3, 'Phyton', '# Phyton yeah', False),
    (4, 'Objective-C', '# Objective-C', TRUE),
    (4, 'Perl', '# Perl', False),
    (4, 'Node.js', '# Node.js', TRUE),
    (4, 'Swift', '# Swift', False),
    (4, 'kotolin', '# kotolin', TRUE),
    (5, 'AWS', '# AWS yeah', False),
    (5, 'Unity', '# Unity', TRUE),
    (5, 'Linux', '# Linux', False),
    (5, 'Ubuntu', '# Ubuntu', TRUE),
    (5, 'WordPress', '# WordPress', False);
    
INSERT INTO
    article_tags(article_id, tag_id, tag_order)
VALUES
    (1, 1, 1);

INSERT INTO
    article_tags(article_id, tag_id, tag_order)
VALUES
    (1, 3, 2);

INSERT INTO
    article_tags(article_id, tag_id, tag_order)
VALUES
    (2, 2, 1);
INSERT INTO
    article_tags(article_id, tag_id, tag_order)
VALUES
    (3, 3, 1);
INSERT INTO
    article_tags(article_id, tag_id, tag_order)
VALUES
    (4, 4, 1);
INSERT INTO
    article_tags(article_id, tag_id, tag_order)
VALUES
    (5, 6, 1);
INSERT INTO
    article_tags(article_id, tag_id, tag_order)
VALUES
    (6, 2, 1);
INSERT INTO
    article_tags(article_id, tag_id, tag_order)
VALUES
    (7, 24, 1);
INSERT INTO
    article_tags(article_id, tag_id, tag_order)
VALUES
    (8, 26, 1);
INSERT INTO
    article_tags(article_id, tag_id, tag_order)
VALUES
    (9, 25, 1);
INSERT INTO
    article_tags(article_id, tag_id, tag_order)
VALUES
    (10, 42, 1);
INSERT INTO
    article_tags(article_id, tag_id, tag_order)
VALUES
    (11, 52, 1);
INSERT INTO
    article_tags(article_id, tag_id, tag_order)
VALUES
    (12, 27, 1);
INSERT INTO
    article_tags(article_id, tag_id, tag_order)
VALUES
    (13, 29, 1);
INSERT INTO
    article_tags(article_id, tag_id, tag_order)
VALUES
    (14, 32, 1);
INSERT INTO
    article_tags(article_id, tag_id, tag_order)
VALUES
    (15, 2, 1);
INSERT INTO
    article_tags(article_id, tag_id, tag_order)
VALUES
    (16, 32, 1);
INSERT INTO
    article_tags(article_id, tag_id, tag_order)
VALUES
    (17, 32, 1);
INSERT INTO
    article_tags(article_id, tag_id, tag_order)
VALUES
    (18, 24, 1);
INSERT INTO
    article_tags(article_id, tag_id, tag_order)
VALUES
    (19, 24, 1);
INSERT INTO
    article_tags(article_id, tag_id, tag_order)
VALUES
    (20, 24, 1);
INSERT INTO
    article_tags(article_id, tag_id, tag_order)
VALUES
    (21, 24, 1);
INSERT INTO
    article_tags(article_id, tag_id, tag_order)
VALUES
    (22, 24, 1);
INSERT INTO
    article_tags(article_id, tag_id, tag_order)
VALUES
    (23, 26, 1);
INSERT INTO
    article_tags(article_id, tag_id, tag_order)
VALUES
    (24, 22, 1);
INSERT INTO
    article_tags(article_id, tag_id, tag_order)
VALUES
    (25, 21, 1);
INSERT INTO
    article_tags(article_id, tag_id, tag_order)
VALUES
    (26, 2, 1);
INSERT INTO
    article_tags(article_id, tag_id, tag_order)
VALUES
    (27, 7, 1);
INSERT INTO
    article_tags(article_id, tag_id, tag_order)
VALUES
    (28, 1, 1),
    (29, 2, 1),
    (30, 3, 1),
    (31, 4, 1),
    (32, 5, 1),
    (33, 6, 1),
    (34, 7, 1),
    (35, 8, 1),
    (36, 9, 1),
    (37, 10, 1),
    (38, 11, 1),
    (39, 12, 1),
    (40, 13, 1),
    (41, 14, 1),
    (42, 15, 1),
    (43, 16, 1),
    (44, 17, 1),
    (45, 18, 1),
    (46, 19, 1),
    (47, 20, 1),
    (48, 21, 1),
    (49, 22, 1),
    (50, 23, 1),
    (51, 24, 1),
    (52, 25, 1);

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