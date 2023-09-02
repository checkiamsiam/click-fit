const express = require("express");
const uploadRouter = require("./modules/upload/upload.route");

const router = express.Router();

const routes = [
  {
    path: "/upload",
    route: uploadRouter,
  },
];

routes.forEach((route) => router.use(route.path, route.route));

module.exports = router;
