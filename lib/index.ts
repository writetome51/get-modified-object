import { modifyObject } from '@writetome51/modify-object';
import { getObjectCopy } from '@writetome51/get-object-copy';

// Makes a copy of `object`, merges `changes` into it and returns the copy.
// Neither of the two arguments get modified.

export function getObjectCopyModified(object, changes): any {
	let copy = getObjectCopy(object);

	modifyObject(copy, changes);
	return copy;
}
