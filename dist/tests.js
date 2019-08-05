"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
// Make sure existing properties can be overwritten and new properties can be added.
var objToModify = { prop1: 10, prop2: 20, prop3: 30 };
var changes = { prop1: 100, prop2: 200, prop10: 1000 };
index_1.modifyObject(objToModify, changes);
if (objToModify.prop1 === 100 && objToModify.prop2 === 200 &&
    objToModify.prop3 === 30 && objToModify.prop10 === 1000)
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
// Make sure existing methods can be overwritten and new methods can be added.
objToModify = {
    prop1: 10, prop2: 20, prop3: 30,
    prop4: function () {
        return this.prop1 + this.prop2;
    }
};
changes = {
    prop1: 100, prop2: 200, prop10: 1000,
    prop5: function () {
        return this.prop1 + this.prop3;
    }
};
index_1.modifyObject(objToModify, changes);
if (objToModify.prop1 === 100 && objToModify.prop2 === 200 &&
    objToModify.prop3 === 30 && objToModify.prop10 === 1000 &&
    objToModify.prop4() === 300 && objToModify.prop5() === 130)
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
// Make sure inherited properties can be overwritten and also be accessed in new methods.
var TestClass = /** @class */ (function () {
    function TestClass() {
        this.prop1 = 1;
        this.prop2 = 2;
    }
    return TestClass;
}());
exports.TestClass = TestClass;
var TestSubclass = /** @class */ (function (_super) {
    __extends(TestSubclass, _super);
    function TestSubclass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prop3 = _this.prop1 + _this.prop2; // 3
        return _this;
    }
    return TestSubclass;
}(TestClass));
exports.TestSubclass = TestSubclass;
var TestSubSubclass = /** @class */ (function (_super) {
    __extends(TestSubSubclass, _super);
    function TestSubSubclass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prop4 = _this.prop1 + _this.prop3; // 4
        return _this;
    }
    return TestSubSubclass;
}(TestSubclass));
exports.TestSubSubclass = TestSubSubclass;
objToModify = new TestSubSubclass();
changes = {
    getSumOfAll: function () {
        return this.prop1 + this.prop2 + this.prop3 + this.prop4;
    }
};
index_1.modifyObject(objToModify, changes);
if (objToModify.getSumOfAll() === 10)
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
