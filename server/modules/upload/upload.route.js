const uploader = require("../../middleware/uploader");
const { uploadImage } = require("./upload.controller");
const uploadRouter = require("express").Router();

uploadRouter.post("/", uploader.single("image"), uploadImage);

module.exports = uploadRouter;
