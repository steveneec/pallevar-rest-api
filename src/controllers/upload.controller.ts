import multer from "multer";
import path from "path";

const productStorage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, path.join(__dirname, "../uploads/products/"));
  },
  filename: function (req, file, cb) {
    const filename = `${Date.now()}-${Math.floor(
      1000 + Math.random() * 9999
    )}${path.extname(file.originalname)}`;
    cb(null, filename);

    //@ts-ignore
    req.imageproduct = filename;
  },
});

const _uploadProduct = multer({ storage: productStorage });

export const uploadProduct = _uploadProduct.fields([
  { name: "product_image", maxCount: 1 },
]);

const storeStorage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, path.join(__dirname, "../uploads/stores"));
  },
  filename: function (req, file, cb) {
    const filename = `${Date.now()}-${Math.floor(
      1000 + Math.random() * 9999
    )}${path.extname(file.originalname)}`;
    cb(null, filename);

    //@ts-ignore
    req.imagestore = filename;
  },
});

const _uploadStore = multer({ storage: storeStorage });

export const uploadStore = _uploadStore.fields([
  { name: "store_image", maxCount: 1 },
]);
