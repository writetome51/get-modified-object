"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var getObjectCopy = require('copy-object');
var modify_object_1 = require("@writetome51/modify-object");
// Makes a copy of `object`, merges `changes` into it and returns the copy.
// Neither of the two arguments get modified.
function getModifiedObject(object, changes) {
    var copy = getObjectCopy(object);
    modify_object_1.modifyObject(copy, changes);
    return copy;
}
exports.getModifiedObject = getModifiedObject;
