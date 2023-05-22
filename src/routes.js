function apiRoute(app){
    //api routes
    app.use("/api/user", require("./api/user/index.js"));
    app.use("/api/product", require("./api/product/index.js"));
    app.use("/api/address", require("./api/address/index.js"));
}

module.exports = {
    apiRoute
};   