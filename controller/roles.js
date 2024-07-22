const { connection } = require('../database');

exports.getRoles = (req, res) => {
    connection.query('SELECT * FROM `roles`', function(err, results, fields) {
        res.json(results);
    });
}

exports.getRole = (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM `roles` WHERE `id` = ?', [id], function(err, results) {
        res.json(results);
    });
}

exports.createRole = (req, res) => {
    connection.query('INSERT INTO `roles` (`id`,`name`) VALUES (?,?)', [req.body.id, req.body.name], function(err, results) {
        res.json(results);
    });
}

exports.updateRole = (req, res) => {
    connection.query('UPDATE `roles` SET `name` = ? WHERE id = ?', [req.body.name, req.body.id], function(err, results) {
        res.json(results);
    });
}

exports.deleteRole = (req, res) => {
    const roleId = req.params.id;
    connection.query('DELETE FROM `roles` WHERE id = ?', [roleId], function(err, results) {
        res.json(results);
    });
}