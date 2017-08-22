# af-utils *1.0.6*

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




### src/deepCompare/deepCompare.js


#### deepCompare(args) 

Function to deep object comparision




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| args | `any`  |  | &nbsp; |




##### Returns


- `boolean`  true when compared objects are equal, and false when opposite




*Documentation generated with [doxdox](https://github.com/neogeek/doxdox).*
