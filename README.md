# getObjectModified(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;object,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;changes: object<br>): object

Returns a new copy of `object` with `changes` merged into it.  
Neither of the two arguments get modified. Prototype chain stays intact.


## Examples
```js
let obj = {prop1: 10, prop2: 20, prop3: 30};
let changes = {prop1: 100, prop2: 200, prop4: 1000};
getObjectModified(obj, changes);
// -->  {prop1: 100, prop2: 200, prop3: 30, prop4: 1000}

obj = {prop1: 10, prop2: 20};
changes = {
    prop1: 100,
    prop3: function () {
        return this.prop1 + this.prop2;
    }
};
let newObj = getObjectModified(obj, changes);

console.log(newObj.prop3());
// console: '120'
```

## Installation

```bash
npm i  @writetome51/get-object-modified
```

## Loading
```js
import {getObjectModified} from '@writetome51/get-object-modified';
```
