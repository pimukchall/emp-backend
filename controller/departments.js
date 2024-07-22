const { connection } = require('../database');

exports.getDepartments = (req, res) => {
    connection.query('SELECT * FROM `departments`', function(err, results, fields) {
        res.json(results);
    });
}

exports.getDepartment = (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM `departments` WHERE `id` = ?', [id], function(err, results) {
        res.json(results);
    });
}

exports.addDepartment = (req, res) => {
    connection.query("INSERT INTO `departments`(`id`, `name`) VALUES (?,?)", [req.body.id, req.body.name], function(err, results) {
        res.json(results);
    }
    );
}

exports.updateDepartment = (req, res) => {
    connection.query("UPDATE `departments` SET `name` = ? WHERE id = ?", [req.body.name, req.body.id], function
        (err, results) {
        res.json(results);
    }
    );
}

exports.deleteDepartment = (req, res) => {
    const departmentId = req.params.id;
    connection.query('DELETE FROM `departments` WHERE id = ?', [departmentId], function(err, results) {
        res.json(results);
    });
}
