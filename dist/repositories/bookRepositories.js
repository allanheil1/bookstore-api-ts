var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import connectionDb from "../config/database.js";
function create(_a) {
    var name = _a.name, author = _a.author, userId = _a.userId;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, connectionDb.query("\n        INSERT INTO books (name, author, \"userId\")\n        VALUES ($1, $2, $3)\n        ", [name, author, userId])];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function findByName(name) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connectionDb.query("\n        SELECT * FROM books WHERE name = $1;\n    ", [name])];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function findAll() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connectionDb.query("\n        SELECT \n          b.id, b.name, b.author, b.available, \n          u.name as \"createdBy\"\n        FROM books b\n        JOIN users u\n        ON b.\"userId\" = u.id;\n    ")];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function findById(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connectionDb.query("\n          SELECT * FROM books \n          WHERE id = $1;\n      ", [id])];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function updateStatusBook(status, bookId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connectionDb.query("\n      UPDATE books\n      SET available = $1\n      WHERE id = $2;\n  ", [status, bookId])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function takeBook(userId, bookId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connectionDb.query("\n      INSERT INTO \"myBooks\" (\"userId\", \"bookId\")\n      VALUES ($1, $2);\n    ", [userId, bookId])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function findAllMyBooks(userId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connectionDb.query("\n    SELECT \n      u.name as \"user_name\",\n      b.name as \"book_name\",\n      b.author as \"book_author\" \n    FROM \"myBooks\" m\n      JOIN users u ON m.\"userId\" = u.id\n      JOIN books b ON m.\"bookId\" = b.id\n    WHERE m.\"userId\" = $1\n    ", [userId])];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
export default {
    create: create,
    findByName: findByName,
    findAll: findAll,
    findById: findById,
    takeBook: takeBook,
    updateStatusBook: updateStatusBook,
    findAllMyBooks: findAllMyBooks,
};
