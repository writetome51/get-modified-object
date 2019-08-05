// @ts-ignore
const getObjectCopy = require('copy-object');
import { modifyObject } from '@writetome51/modify-object';

// Makes a copy of `object`, merges `changes` into it and returns the copy.
// Neither of the two arguments get modified.

export function getModifiedObject(object, changes): Object {
	let copy = getObjectCopy(object);

	modifyObject(copy, changes);
	return copy;
}
