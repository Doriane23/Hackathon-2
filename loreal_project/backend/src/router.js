const express = require("express");
const multer = require("multer");

const upload = multer({ dest: "public/uploads" });
const router = express.Router();

const productControllers = require("./controllers/productControllers");
// const validateProduct = require("./validators/validateProduct");

router.get("/products", productControllers.browse);
router.get("/products/:id", productControllers.read);
// router.post("/products", validateProduct, productControllers.add);
// router.put("/products/:id", validateProduct, productControllers.edit);
// router.delete("/products/:id", productControllers.destroy);


const userControllers = require("./controllers/userControllers");
// const validateUser = require("./validators/validateUser");

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
// router.post("/users", validateUser, userControllers.add);
// router.put("/users/:id", validateUser, userControllers.edit);
// router.delete("/users/:id", userControllers.destroy);


/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import userController module for handling item-related operations
const userController = require("./controllers/userController");

// Route to get a list of items
router.get("/users", userController.browse);

// Route to get a specific item by ID
router.get("/users/:id", userController.read);

// Route to add a new item
router.post("/users", upload.single("avatar"), userController.add);

/* ************************************************************************* */

module.exports = router;
