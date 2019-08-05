# getModifiedObject(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;object,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;changes<br>): Object
Makes a copy of `object`, merges `changes` into it and returns the copy.  
Neither of the two arguments get modified.


## Examples
```ts
let obj = {prop1: 10, prop2: 20, prop3: 30};
let changes = {prop1: 100, prop2: 200, prop4: 1000};
getModifiedObject(obj, changes);
// -->  {prop1: 100, prop2: 200, prop3: 30, prop4: 1000}

obj = {prop1: 10, prop2: 30};
changes = {
    prop1: 100,
    prop3: function () {
        return this.prop1 + this.prop2;
    }
};
let newObj = getModifiedObject(obj, changes);

console.log(newObj.prop3());
// console: '130'
```

## Installation

```bash
npm i  @writetome51/get-modified-object
```

## Loading
```ts
// If using TypeScript:
import {getModifiedObject} from '@writetome51/get-modified-object';
// If using ES5 JavaScript:
var getModifiedObject = require('@writetome51/get-modified-object').getModifiedObject;
```
