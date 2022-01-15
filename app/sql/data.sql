-- user_info
INSERT INTO
    user_info(
        user_name,
        email,
        engineer_type,
        description
    )
VALUES
    ('qiish', 'sample@qiish.com', 'Java', 'hello');

INSERT INTO
    user_info(
        user_name,
        email,
        engineer_type,
        description
    )
VALUES
    ('zenn', 'sample@zenn.com', 'Python', 'Hej!');

INSERT INTO
    user_info(
        user_name,
        email,
        engineer_type,
        description
    )
VALUES
    ('qiita', 'sample@qiita.com', 'React', 'hei');

-- user
INSERT INTO
    user(user_info_id, email, PASSWORD)
VALUES
    (1, 'sample@qiish.com', 'qiish');

INSERT INTO
    user(user_info_id, email, PASSWORD)
VALUES
    (2, 'sample@zenn.com', 'zenn');

INSERT INTO
    user(user_info_id, email, PASSWORD)
VALUES
    (3, 'sample@qiita.com', 'qiita');

-- tags
INSERT INTO
    tags(skill)
VALUES
    ('Java');

INSERT INTO
    tags(skill)
VALUES
    ('Python');

INSERT INTO
    tags(skill)
VALUES
    ('React');

-- user_info_tags
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

-- follow
INSERT INTO
    follow(user_info_id, follow_user_info_id)
VALUES
    (1, 2);

INSERT INTO
    follow(user_info_id, follow_user_info_id)
VALUES
    (1, 3);

-- articles
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

-- article_tags
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

-- likes
INSERT INTO
    likes(user_info_id, article_id)
VALUES
    (2, 1);

-- comments
INSERT INTO
    comments(article_id, user_info_id, COMMENT)
VALUES
    (1, 3, 'I agree.');

-- comment_likes
INSERT INTO
    comment_likes(user_info_id, comments_id)
VALUES
    (1, 1);