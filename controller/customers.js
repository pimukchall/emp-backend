const { connection } = require("../database");

exports.getCustomers = (req, res) => {
    connection.query(
        'SELECT * FROM `customers`',
        function(err, results, fields) {
          res.json(results);
        }
    );
}

exports.getCustomer = (req, res) => {
    const id = req.params.id;
    connection.query(
        'SELECT * FROM `customers` WHERE `id` = ? ',
        [id],
        function(err, results) {
          res.json(results);
        });
};

exports.createCustomer = (req, res) => {
    connection.query(
        "INSERT INTO `customers` (`fname`, `lname`, `address`, `idcard`, `companay_number`, `phone`, `email`, `link`, `date_in`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
            req.body.fname,
            req.body.lname,
            req.body.address,
            req.body.idcard,
            req.body.companay_number,
            req.body.phone,
            req.body.email,
            req.body.link,
            req.body.date_in],

        function(err, results) {
          res.json(results);
        }
    );
}

exports.updateCustomer = (req, res) => {
    connection.query(
      "UPDATE `customers` SET `fname`= ?, `lname`= ?, `address`= ?, `idcard`= ?, `companay_number`= ?, `phone`= ?, `email`= ?, `link`= ?, `date_in`= ? WHERE id = ?",
        [
            req.body.fname,
            req.body.lname,
            req.body.address,
            req.body.idcard,
            req.body.companay_number,
            req.body.phone,
            req.body.email,
            req.body.link,
            req.body.date_in,
            req.body.id,
    
        ],
            function(err, results) {
            res.json(results);
            }
    );
}

exports.deleteCustomer = (req, res) => {
    const customerId = req.params.id;
    connection.query(
        'DELETE FROM `customers` WHERE id = ?',
        [customerId],
        function(err, results) {
          res.json(results);
        }
    );
}