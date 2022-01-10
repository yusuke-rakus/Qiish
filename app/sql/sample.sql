INSERT INTO
    user_info(user_name, email, engineer_type, comment)
VALUES
    (
        'SampleUser',
        'sample@sample.com',
        'Python',
        'Hej'
    );

INSERT INTO
    user(user_info_id, email, password, user_name)
VALUES
    (1, 'sample@sample.com', 'sample', 'SampleUser',);