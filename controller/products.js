const { connection } = require('../database');

exports.getProducts = (req, res) => {
    connection.query('SELECT * FROM `products`', function(err, results, fields) {
        res.json(results);
    });
}

exports.getProduct = (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM `products` WHERE `id` = ?', [id], function(err, results) {
        res.json(results);
    });
}

exports.addProduct = (req, res) => {
    connection.query(
        'INSERT INTO `products`(`name`, `user_id`, `category_id`, `location_id`, `store_id`, `status_id`, `asset_number`, `document_number`, `quantity`, `size`, `price`, `date_in`, `date_out`, `file`, `note`, `brand`, `model`, `cpu`, `mainboard`, `gpu`, `ram`, `storage`, `os`, `license`, `resolution`, `serial_number`, `type_printer_id`, `type_inks_id`, `inks`, `print_maximum`, `ip_address`, `mac_address`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
          req.body.name, 
          req.body.user_id, 
          req.body.category_id, 
          req.body.location_id, 
          req.body.store_id, 
          req.body.status_id, 
          req.body.asset_number, 
          req.body.document_number, 
          req.body.quantity, 
          req.body.size, 
          req.body.price, 
          new Date(req.body.date_in).toISOString().slice(0, 19).replace('T', ' '), // แปลงค่าวันที่ให้เป็นรูปแบบที่ถูกต้อง
          new Date(req.body.date_out).toISOString().slice(0, 19).replace('T', ' '), // แปลงค่าวันที่ให้เป็นรูปแบบที่ถูกต้อง
          req.body.file, 
          req.body.note, 
          req.body.brand, 
          req.body.model, 
          req.body.cpu, 
          req.body.mainboard, 
          req.body.gpu, 
          req.body.ram, 
          req.body.storage, 
          req.body.os, 
          req.body.license, 
          req.body.resolution, 
          req.body.serial_number, 
          req.body.type_printer_id, 
          req.body.type_inks_id, 
          req.body.inks, 
          req.body.print_maximum, 
          req.body.ip_address, 
          req.body.mac_address
        ],
        function(err, results) {
            res.json(results);
        }
    );
}

exports.updateProduct = (req, res) => {
    connection.query(
        'UPDATE `products` SET `name`= ?, `user_id`= ?, `category_id`= ?, `location_id`= ?, `store_id`= ?, `status_id`= ?, `asset_number`= ?, `document_number`= ?, `quantity`= ?, `size`= ?, `price`= ?, `date_in`= ?, `date_out`= ?, `file`= ?, `note`= ?, `brand`= ?, `model`= ?, `cpu`= ?, `mainboard`= ?, `gpu`= ?, `ram`= ?, `storage`= ?, `os`= ?, `license`= ?, `resolution`= ?, `serial_number`= ?, `type_printer_id`= ?, `type_inks_id`= ?, `inks`= ?, `print_maximum`= ?, `ip_address`= ?, `mac_address`= ? WHERE id = ?',
        [
        req.body.name, 
        req.body.user_id, 
        req.body.category_id, 
        req.body.location_id, 
        req.body.store_id, 
        req.body.status_id, 
        req.body.asset_number, 
        req.body.document_number, 
        req.body.quantity, 
        req.body.size, 
        req.body.price, 
        new Date(req.body.date_in).toISOString().slice(0, 19).replace('T', ' '), // แปลงค่าวันที่ให้เป็นรูปแบบที่ถูกต้อง
        new Date(req.body.date_out).toISOString().slice(0, 19).replace('T', ' '), // แปลงค่าวันที่ให้เป็นรูปแบบที่ถูกต้อง
        req.body.file, 
        req.body.note, 
        req.body.brand, 
        req.body.model, 
        req.body.cpu, 
        req.body.mainboard, 
        req.body.gpu, 
        req.body.ram, 
        req.body.storage, 
        req.body.os, 
        req.body.license, 
        req.body.resolution, 
        req.body.serial_number, 
        req.body.type_printer_id, 
        req.body.type_inks_id, 
        req.body.inks, 
        req.body.print_maximum, 
        req.body.ip_address, 
        req.body.mac_address, 
        req.body.id
        ],
        function(err, results) {
            res.json(results);
        }
    );
}

exports.deleteProduct = (req, res) => {
    const productId = req.params.id;
    connection.query('DELETE FROM `products` WHERE id = ?', [productId], function(err, results) {
        res.json(results);
    });
}