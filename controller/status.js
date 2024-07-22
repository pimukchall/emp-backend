const { connection } = require('../database');

exports.getStatuses = (req, res) => {
    connection.query('SELECT * FROM `status`', function(err, results, fields) {
        res.json(results);
    });
}

exports.getStatus = (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM `status` WHERE `id` = ?', [id], function(err, results) {
        res.json(results);
    });
}

exports.createStatus = (req, res) => {
    connection.query('INSERT INTO `status` (`id`,`name`) VALUES (?,?)', [req.body.id, req.body.name], function(err, results) {
        res.json(results);
    });
}

exports.updateStatus = (req, res) => {
    connection.query('UPDATE `status` SET `name` = ? WHERE id = ?', [req.body.name, req.body.id], function
    (err, results) {
        res.json(results);
    }
    );
}

exports.deleteStatus = (req, res) => {
    const statusId = req.params.id;
    connection.query('DELETE FROM `status` WHERE id = ?', [statusId], function(err, results) {
        res.json(results);
    });
}