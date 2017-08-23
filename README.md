# af-utils *1.0.8*

> bunch of utility/helper functions


### src/camelize/camelize.js


#### camelize(str) 

Simple function for change string from snake_case to camelCase




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| str | `string`  | string which will be camelized | &nbsp; |




##### Examples

```javascript
camelize('foo_bar'); // returns 'fooBar'
```
```javascript
camelize('BAR_BAZ'); // returns 'barBaz'
```
```javascript
camelize('BAZFOO'); // returns 'bazfoo'
```


##### Returns


- `string`  camelized string




### src/debounce/debounce.js


#### debounce(func, wait[, immediate]) 

Simple function debouncing




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| func | `function`  | dunction which will be debounced | &nbsp; |
| wait | `number`  | number of milliseconds to debounce | &nbsp; |
| immediate | `any`  | optional argument, which if set to true will immediately fire debounced function | *Optional* |




##### Returns


- `Void`




### src/deepCompare/deepCompare.js


#### deepCompare(arg) 

Function to deep object comparision




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| arg | `Object`  | - objects which will be compared to eachself | &nbsp; |




##### Examples

```javascript
deepCompare({}, {}); // returns true
```
```javascript
const obj1 = {
  foo: 'bar',
};

const obj2 = {
  'foo': 'bar'
};

deepCompare(obj1, obj2); // returns true
```
```javascript
deepCompare({ foo: true }, { bar: true }); // returns false
```


##### Returns


- `boolean`  true when compared objects are equal, and false when opposite




### src/genUuid/genUuid.js


#### genUuid() 

Function for generating universally unique identifier (RFC 4122 v4)






##### Examples

```javascript
genUuid() // returns for example: 'c127d3bb-4c34-429b-ab6a-a6b4073ef6d4'
```


##### Returns


- `string`  generated random Uuid




### src/isFunction/isFunction.js


#### isFunction(item) 

Simple function which is checking if given argument is a function




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| item | `any`  | anything which should be checked if is function | &nbsp; |




##### Examples

```javascript
const noop = () => {};

isFunction(noop); // returns true
```
```javascript
function noop() {};

isFunction(noop); // returns true
```
```javascript
const noop = function() {};

isFunction(noop); // returns true
```
```javascript
isFunction({}); // returns false
```
```javascript
isFunction('string'); // returns false
```


##### Returns


- `boolean`  true if argument is function, false if not




*Documentation generated with [doxdox](https://github.com/neogeek/doxdox).*
