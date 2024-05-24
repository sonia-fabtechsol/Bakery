import express from "express";
import {
  categoryProductController,
  createProductController,
  deleteProductController,
  filterProductController,
  getAllProductController,
  getProductController,
  paginationProductController,
  similarProductController,
  totalProductController,
  updateProductController,
} from "../controllers/productController.js";
import { authenticateUser, isAdmin } from "../middlewares/requiredSignIn.js";
import { upload } from "../middlewares/MulterUploder.js";
const router = express.Router();

router.post(
  "/create-product",
  authenticateUser,
  isAdmin,
  upload.fields([{ name: "productImage", maxCount: 1 }]),

  createProductController
);
router.put(
  "/update-product/:id",
  authenticateUser,
  isAdmin,
  upload.fields([
    {
      name: "productImage",
      maxCount: 1,
    },
  ]),
  updateProductController
);
router.get("/all-product", getAllProductController);
router.get("/single-product/:id", getProductController);
router.delete(
  "/delete-product/:id",
  authenticateUser,
  isAdmin,
  deleteProductController
);
router.post('/filter-product', filterProductController)
router.get('/count-product', totalProductController)
router.get('/product-list/:page', paginationProductController)
router.get('/category-product/:slug', categoryProductController)
router.get('/similar/:pid/:cid', similarProductController)

export default router;
