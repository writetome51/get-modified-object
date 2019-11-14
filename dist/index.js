"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modify_object_1 = require("@writetome51/modify-object");
var get_object_copy_1 = require("@writetome51/get-object-copy");
// Makes a copy of `object`, merges `changes` into it and returns the copy.
// Neither of the two arguments get modified.
function getObjectCopyModified(object, changes) {
    var copy = get_object_copy_1.getObjectCopy(object);
    modify_object_1.modifyObject(copy, changes);
    return copy;
}
exports.getObjectCopyModified = getObjectCopyModified;
