-   At times, you will find it useful to be able to create objects and pass in variables to dynamically create property names, instead of hard-coding the property names.  
    
-   For an example, bring up your browser's developer console and enter the following:

```javascript
const myProperty = "foo";
```

```javascript
const myObject = {
    [myProperty]: "This is a test"
};
```

```javascript
myObject
```

-   From the above, you should be able to see how by using square brackets around the property identifier for **myObject**, the value of the variable **myProperty**, "**foo**", was used as the property name.