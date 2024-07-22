const { connection } = require('../database');

exports.getStores = (req, res) => {
    connection.query('SELECT * FROM `stores`', function(err, results, fields) {
        res.json(results);
    });
}

exports.getStore = (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM `stores` WHERE `id` = ?', [id], function(err, results) {
        res.json(results);
    });
}

exports.createStore = (req, res) => {
    connection.query("INSERT INTO `stores`(`id`, `name`, `seller`, `phone`,`address`) VALUES (?,?,?,?,?)",
    [req.body.id, req.body.name, req.body.seller, req.body.phone, req.body.address], function(err, results) {
        res.json(results);
    }
    );
}

exports.updateStore = (req, res) => {
    connection.query("UPDATE `stores` SET `name` = ?, `seller` = ?, `phone` = ?, `address` = ? WHERE id = ?",
    [req.body.name, req.body.seller, req.body.phone, req.body.address, req.body.id], function(err, results) {
        res.json(results);
    }
    );
}

exports.deleteStore = (req, res) => {
    const storeId = req.params.id;
    connection.query('DELETE FROM `stores` WHERE id = ?', [storeId], function(err, results) {
        res.json(results);
    });
}