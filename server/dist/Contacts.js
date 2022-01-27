"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = __importStar(require("path"));
var Datastore = require("nedb");
// Performs contact operations
var Worker = /** @class */ (function () {
    function Worker() {
        this.db = new Datastore({
            filename: path.join(__dirname, "contacts.db"),
            autoload: true
        });
    }
    Worker.prototype.listContacts = function () {
        var _this = this;
        console.log("Contacts.Worker.listContacts()");
        return new Promise(function (inResolve, inReject) {
            _this.db.find({}, function (inError, inDocs) {
                if (inError) {
                    console.log("Contacts.Worker.listContacts(): Error", inError);
                    inReject(inError);
                }
                else {
                    console.log("Contacts.Worker.listContacts(): Ok", inDocs);
                    inResolve(inDocs);
                }
            });
        });
    };
    Worker.prototype.addContact = function (inContact) {
        var _this = this;
        console.log("Contacts.Worker.addContact()", inContact);
        return new Promise(function (inResolve, inReject) {
            _this.db.insert(inContact, function (inError, inNewDoc) {
                if (inError) {
                    console.log("Contacts.Worker.addContact(): Error", inError);
                    inReject(inError);
                }
                else {
                    console.log("Contacts.Worker.addContact(): Ok", inNewDoc);
                    inResolve(inNewDoc);
                }
            });
        });
    };
    Worker.prototype.deleteContact = function (inID) {
        var _this = this;
        console.log("Contacts.Worker.deleteContact()", inID);
        return new Promise(function (inResolve, inReject) {
            _this.db.remove({ _id: inID }, {}, function (inError, inNumRemoved) {
                if (inError) {
                    console.log("Contacts.Worker.deleteContact(): Error", inError);
                    inReject(inError);
                }
                else {
                    console.log("Contacts.Worker.deleteContact(): Ok", inNumRemoved);
                    inResolve("");
                }
            });
        });
    };
    return Worker;
}());
exports.Worker = Worker;
//# sourceMappingURL=Contacts.js.map