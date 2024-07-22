const { connection } = require("../database");

exports.getUsers = (req, res) => {
    connection.query('SELECT * FROM `users`', function(err, results, fields) {
        res.json(results);
    });
}

exports.getUser = (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM `users` WHERE `id` = ?', [id], function(err, results) {
        res.json(results);
    });
}

exports.updateUser = (req, res) => {
    connection.query('UPDATE `users` SET `fname`= ?, `lname`= ?, `department_id`= ?, `role_id`= ?, `email`= ?, `phone`= ?, `empcode`= ?, `file`= ?, `date_in`= ? WHERE id = ?',
    [req.body.fname, req.body.lname, req.body.department_id, req.body.role_id, req.body.email, req.body.phone, req.body.empcode, req.body.file, req.body.date_in, req.params.id], function(err, results) {
        res.json(results);
    });
}

exports.deleteUser = (req, res) => {
    const userId = req.params.id;
    connection.query('DELETE FROM `users` WHERE id = ?', [userId], function(err, results) {
        res.json(results);
    });
}