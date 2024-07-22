const { connection } = require('../database');

exports.getLocations = (req, res) => {
    connection.query('SELECT * FROM `locations`', function(err, results, fields) {
        res.json(results);
    });
}

exports.getLocation = (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM `locations` WHERE `id` = ?', [id], function(err, results) {
        res.json(results);
    });
}

exports.addLocation = (req, res) => {
    connection.query("INSERT INTO `locations`(`id`, `name`, `leader`, `phone`, `address` ,`link`) VALUES (?,?,?,?,?,?)",
    [req.body.id, req.body.name, req.body.leader, req.body.phone, req.body.address, req.body.link], function(err, results) {
        res.json(results);
    });
}

exports.updateLocation = (req, res) => {
    connection.query("UPDATE `locations` SET `name` = ?, `leader` = ?, `phone` = ?, `address` = ?, `link` = ? WHERE id = ?",
    [req.body.name, req.body.leader, req.body.phone, req.body.address, req.body.link, req.body.id], function(err, results) {
        res.json(results);
    });
}

exports.deleteLocation = (req, res) => {
    const locationId = req.params.id;
    connection.query('DELETE FROM `locations` WHERE id = ?', [locationId], function(err, results) {
        res.json(results);
    });
}