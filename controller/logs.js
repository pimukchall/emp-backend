const { connection } = require('../database');

exports.getLogs = (req, res) => {
  connection.query('SELECT * FROM `logs`', function (err, results, fields) {
    res.json(results);
  });
}

exports.getLog = (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM `logs` WHERE `id` = ? ', [id], function (err, results) {
    res.json(results);
  });
}

exports.addLog = (req, res) => {
  connection.query(
    "INSERT INTO `logs`(`user_id`, `product_id`, `action`, `description`, `time`) VALUES (?,?,?,?,?)",
    [req.body.user_id, req.body.product_id, req.body.action, req.body.description, req.body.time],
    function (err, results) {
      res.json(results);
    }
  );
}

exports.updateLog = (req, res) => {
  connection.query(
    "UPDATE `logs` SET `user_id` = ?, `product_id` = ?, `action` = ?, `description` = ?, `time` = ? WHERE `id` = ?",
    [req.body.user_id, req.body.product_id, req.body.action, req.body.description, req.body.time, req.params.id],
    function (err, results) {
      res.json(results);
    }
  );
}

exports.deleteLog = (req, res) => {
  connection.query('DELETE FROM `logs` WHERE `id` = ?', [req.params.id], function (err, results) {
    res.json(results);
  });
}