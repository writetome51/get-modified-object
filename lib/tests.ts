import { getObjectCopyModified } from './index';

// Make sure existing properties can be overwritten and new properties can be added.

let objToModify: any = {prop1: 10, prop2: 20, prop3: 30};
let changes: any = {prop1: 100, prop2: 200, prop10: 1000};
let newObj: any = getObjectCopyModified(objToModify, changes);

if (newObj.prop1 === 100 && newObj.prop2 === 200 &&
	newObj.prop3 === 30 && newObj.prop10 === 1000) console.log('test 1 passed');
else console.log('test 1 FAILED');


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
newObj = getObjectCopyModified(objToModify, changes);

if (newObj.prop1 === 100 && newObj.prop2 === 200 &&
	newObj.prop3 === 30 && newObj.prop10 === 1000 &&
	newObj.prop4() === 300 && newObj.prop5() === 130) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Make sure inherited properties can be overwritten and also be accessed in new methods.

export class TestClass {
	prop1 = 1;
	prop2 = 2;
}


export class TestSubclass extends TestClass {
	prop3 = this.prop1 + this.prop2; // 3
}


export class TestSubSubclass extends TestSubclass {
	prop4 = this.prop1 + this.prop3; // 4
}


objToModify = new TestSubSubclass();
changes = {
	getSumOfAll: function () {
		return this.prop1 + this.prop2 + this.prop3 + this.prop4;
	}
};

newObj = getObjectCopyModified(objToModify, changes);

if (newObj.getSumOfAll() === 10) console.log('test 3 passed');
else console.log('test 3 FAILED');


if (newObj instanceof TestSubSubclass) console.log('test 4 passed');
else console.log('test 4 FAILED');

if (newObj instanceof TestClass) console.log('test 5 passed');
else console.log('test 5 FAILED');
