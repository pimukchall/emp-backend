const { connection } = require('../database');

exports.getCategories = (req, res) => {
    connection.query('SELECT * FROM `categories`', function(err, results, fields) {
        res.json(results);
    });
}

exports.getCategory = (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM `categories` WHERE `id` = ?', [id], function(err, results) {
        res.json(results);
    });
}

exports.addCategory = (req, res) => {
    connection.query('INSERT INTO `categories` (`id`,`name`) VALUES (?,?)', [req.body.id, req.body.name], function(err, results) {
        res.json(results);
    });
}

exports.updateCategory = (req, res) => {
    connection.query('UPDATE `categories` SET `name` = ? WHERE id = ?', [req.body.name, req.body.id], function(err, results) {
        res.json(results);
    });
}

exports.deleteCategory = (req, res) => {
    const categoryId = req.params.id;
    connection.query('DELETE FROM `categories` WHERE id = ?', [categoryId], function(err, results) {
        res.json(results);
    });
}

