// สร้าง function สำหรับดึงข้อมูลสินค้าตามหมวดหมู่

exports.getNotebooks = (req, res) => {
    connection.query('SELECT * FROM `products` WHERE `category_id` = 1', function(err, results, fields) {
        if (err) {
            console.error('Error executing query', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'No notebooks found' });
        }
        res.json(results);
    });
}


exports.getDesktops = (req, res) => {
    connection.query('SELECT * FROM `products` WHERE `category_id` = 2', function(err, results, fields) {
        res.json(results);
    });
}

exports.getMonitors = (req, res) => {
    connection.query('SELECT * FROM `products` WHERE `category_id` = 3', function(err, results, fields) {
        res.json(results);
    });
}

exports.getSmartphones = (req, res) => {
    connection.query('SELECT * FROM `products` WHERE `category_id` = 4', function(err, results, fields) {
        res.json(results);
    });
}

exports.getPrinters = (req, res) => {
    connection.query('SELECT * FROM `products` WHERE `category_id` = 5', function(err, results, fields) {
        res.json(results);
    });
}

exports.getNetworks = (req, res) => {
    connection.query('SELECT * FROM `products` WHERE `category_id` = 6', function(err, results, fields) {
        res.json(results);
    });
}

exports.getAccessories = (req, res) => {
    connection.query('SELECT * FROM `products` WHERE `category_id` = 7', function(err, results, fields) {
        res.json(results);
    });
}

exports.getCameras = (req, res) => {
    connection.query('SELECT * FROM `products` WHERE `category_id` = 8', function(err, results, fields) {
        res.json(results);
    });
}

exports.getIps = (req, res) => {
    connection.query('SELECT * FROM `products` WHERE `category_id` = 9', function(err, results, fields) {
        res.json(results);
    });
}

exports.getOffices = (req, res) => {
    connection.query('SELECT * FROM `products` WHERE `category_id` = 10', function(err, results, fields) {
        res.json(results);
    });
}

exports.getEquipments = (req, res) => {
    connection.query('SELECT * FROM `products` WHERE `category_id` = 11', function(err, results, fields) {
        res.json(results);
    });
}

exports.getVehicles = (req, res) => {
    connection.query('SELECT * FROM `products` WHERE `category_id` = 12', function(err, results, fields) {
        res.json(results);
    });
}

router.get('/notebooks', getNotebooks);
router.get('/desktops', getDesktops);
router.get('/monitors', getMonitors);
router.get('/smartphones', getSmartphones);
router.get('/printers', getPrinters);
router.get('/networks', getNetworks);
router.get('/accessories', getAccessories);
router.get('/cameras', getCameras);
router.get('/ips', getIps);
router.get('/offices', getOffices);
router.get('/equipments', getEquipments);
router.get('/vehicles', getVehicles);