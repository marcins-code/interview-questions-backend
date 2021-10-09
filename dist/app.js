"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// Boot express
var app = express_1.default();
var port = 3000;
// Application routing
app.use('/', function (req, res, _next) {
    res.status(200).send({ data: 'Hello from Oranio AS' });
});
// Start server
app.listen(port, function () { return console.log("Server is listening on port " + port + "!"); });
//# sourceMappingURL=app.js.map