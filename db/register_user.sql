INSERT INTO users2
(is_admin, username, hash)
VALUES
($1, $2, $3)
returning *;