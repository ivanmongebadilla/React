-   The spread syntax lets you access and "spread" out copies of the contents of an array or object, using an ellipsis (a set of three dots, **...**) in front of an array or object.
-   Let's try a few examples with arrays first. In your browser's developer console, create these two arrays:

```javascript
const landVehicles = ["sedan", "truck", "van"];
```

```javascript
const waterVehicles = ["canoe", "sailboat", "submarine"];
```

-   To combine these arrays into one, you can use the spread syntax like this:

```javascript
const vehicles = [...landVehicles, ...waterVehicles];
```

-   You can even spread and recombine multiple arrays along with other types of data. Try this in your console:

```javascript
const mixNMatch = [...landVehicles, "banana", 3, 3, { someObjProperty: "someObjPropertyValue" }, ...waterVehicles];
```
```javascript
const objOne = {color: "blue", height: 12};
```

```javascript
const objTwo = {material: "ceramic", width: 6};
```

-   These two objects can be combined into a third object using the spread syntax, plus curly braces surrounding the spread objects:

```javascript
const objOneAndTwoCombined = {...objOne, ...objTwo};
```

