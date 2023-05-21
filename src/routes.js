function apiRoute(app){
    //api routes
    app.use("/api/user", require("./api/user/index.js"));
    app.use("/api/vendor", require("./api/vendor/index.js"));
    app.use("/api/admin", require("./api/admin/index.js"));
    app.use("/api/product", require("./api/product/index.js"));
}

module.exports = {
    apiRoute
};   