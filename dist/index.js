"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const port = 4001;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
mongoose_1.default.connect("mongodb+srv://pantsantosh:bzCzDVSfTSBiutWz@cluster0.g3kc3lr.mongodb.net/bibek");
const SchemaForLogin = new mongoose_1.default.Schema({ email: String, password: String });
const loginDB = mongoose_1.default.model("data", SchemaForLogin);
app.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Reached first line");
        const email = req.body.email;
        const password = req.body.password;
        console.log("email is " + email + " password is " + password);
        const putdata = new loginDB({ email: email, password: password });
        yield putdata.save();
        res.json({
            "success": true,
            "message": "success"
        });
    }
    catch (e) {
        // console.log(e);
        res.json({
            "success": false,
            "message": "Try Again"
        });
    }
}));
app.get('/', (req, res) => {
    res.send("Deployed");
});
app.listen(port, () => {
    console.log("Deployed");
});
