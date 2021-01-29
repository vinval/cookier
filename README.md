# cookier
A simple cookie parser for node.js

```javascript
const cookier = require("@vinval/cookier")
const cookieParsed = cookier.parse("thisisthecookiestring");
const cookieList = cookier.list("thisisthecookiestring");

console.log(cookieParsed); // json object

console.log(cookieList); // array of cookie keys
```

## Example

```javascript
const express = require("express");
const app = express();
const cookier = require("@vinval/cookier");

app.get("/", (req,res,next)=>{
    const cookieParsed = cookier.parse(req.headers.cookie);
    const oneOfTheCookies = cookieParsed[cookieKey];
    console.log(oneOfTheCookies);
})
```