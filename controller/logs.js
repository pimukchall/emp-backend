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
  connection.query("INSERT INTO `logs`(`id`, `log`, `date`, `time`, `user_id`) VALUES (?,?,?,?,?)", [req.body.id, req.body.log, req.body.date, req.body.time, req.body.user_id], function (err, results) {
    res.json(results);
  });
}

exports.updateLog = (req, res) => {
  connection.query("UPDATE `logs` SET `log` = ?, `date` = ?, `time` = ?, `user_id` = ? WHERE id = ?", [req.body.log, req.body.date, req.body.time, req.body.user_id, req.body.id], function (err, results) {
    res.json(results);
  });
}

exports.deleteLog = (req, res) => {
  const logId = req.params.id;
  connection.query('DELETE FROM `logs` WHERE id = ?', [logId], function (err, results) {
    res.json(results);
  });
}