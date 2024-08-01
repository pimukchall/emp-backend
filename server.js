//ประกาศใช้ไฟล์ .env
require('dotenv').config();

// นำเข้าโมดูลต่างๆ
const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const URL = process.env.HTTP;
const port = process.env.port || 3001;

// สร้าง express app
const app = express();

// นำเข้า routes ที่เราสร้างไว้
const userRouters = require("./routes/users");
const categoriesRouters = require("./routes/categories");
const customersRouters = require("./routes/customers");
const logRouters = require("./routes/logs");
const locationRouters = require("./routes/locations");
const departmentRouters = require("./routes/departments");
const storeRouters = require("./routes/stores");
const statusRouters = require("./routes/status");
const productRouters = require("./routes/products");
const authRoutes = require('./routes/auth');
const roleRoutes = require('./routes/roles');

// ใช้ cors สำหรับการทำ Cross-Origin Resource Sharing
app.use(cors({ origin: URL, credentials: true }));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// สร้าง route ทดสอบ
app.get('/', (req, res) => {
    console.log('The Emperor House API is working');
    res.send('The Emperor House API is working');
});
app.get('/test', (req, res) => {
    console.log('Server is running');
    res.send('Server is running');
});

// ใช้ routes ที่เราสร้างไว้
app.use("/users", userRouters);
app.use("/categories", categoriesRouters);
app.use("/customers", customersRouters);
app.use("/logs", logRouters);
app.use("/locations", locationRouters);
app.use("/departments", departmentRouters);
app.use("/stores", storeRouters);
app.use("/status", statusRouters);
app.use("/products", productRouters);
app.use('/auth', authRoutes);
app.use('/roles', roleRoutes);

// รัน server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
